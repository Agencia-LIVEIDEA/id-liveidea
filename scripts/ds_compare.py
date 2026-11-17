#!/usr/bin/env python3
"""Compara o design system publicado no claude.ai com a pasta design-system/ deste repositório
e, com --apply, traz para o repositório o que mudou lá.

Entradas (o agente da rotina quinzenal gera as duas com a ferramenta Artifact):
  --published DIR   a pasta `project/` baixada do artifact do design system (README.md, CHANGELOG.md,
                    tokens.json, design-system.json, components/, fonts/, assets/*/README.md)
  --assets FILE     o texto da listagem do asset store (Artifact list, scope "assets"), com todas as
                    páginas coladas em sequência. Cada linha traz /_blob/<id>, tamanho e sha256.
  --repo DIR        a pasta design-system/ do repositório (padrão: design-system)

Saída: resumo legível no stderr e relatório JSON no stdout (ou em --report).
  in_sync            true quando nada difere
  version            {published, repo, relation: igual | publicado-a-frente | repo-a-frente}
  files              {changed, added, removed}   arquivos de texto e fontes
  assets             {changed, added, removed, missing_in_store}   fotos, logos, ícones, capas
  fetch              ids de blob que precisam ser baixados antes do --apply

Com --apply --blobs DIR (pasta com os blobs baixados, nome <id> ou <id>.<ext>), copia os arquivos
alterados e novos para o repositório e apaga os removidos. Não mexe em versão nem CHANGELOG.

Código de saída: 0 em sincronia · 10 há diferenças · 1 erro de uso ou de entrada.
"""
import argparse, hashlib, json, re, shutil, sys
from pathlib import Path

# Existem só no repositório, de propósito: o design system do claude.ai não guarda .ttf nem os binários
# dos assets como arquivos (eles ficam no asset store e são comparados pelo sha256).
REPO_ONLY = [re.compile(r"^fonts/.*\.ttf$"), re.compile(r"^assets/[^/]+/(?!README\.md$)[^/]+$")]
BLOB_LINE = re.compile(r"/_blob/([0-9a-f]{32})\s+\S+\s+(\d+) bytes.*?sha256 ([0-9a-f]{64})")


def sha(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 16), b""):
            h.update(chunk)
    return h.hexdigest()


def files_under(root):
    return {p.relative_to(root).as_posix(): p for p in root.rglob("*") if p.is_file()}


def release(ds_dir):
    try:
        return json.loads((ds_dir / "tokens.json").read_text(encoding="utf-8"))["meta"].get("release", "")
    except (OSError, ValueError, KeyError):
        return ""


def vkey(v):
    try:
        return tuple(int(x) for x in v.split("."))
    except ValueError:
        return (0,)


def asset_map(ds_dir):
    """{(grupo, arquivo): blob} a partir de design-system.json."""
    data = json.loads((ds_dir / "design-system.json").read_text(encoding="utf-8"))
    out = {}
    for gname, g in (data.get("assetGroups") or {}).items():
        for fname, f in (g.get("files") or {}).items():
            out[(gname, fname)] = f.get("blob")
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--published", required=True, type=Path)
    ap.add_argument("--assets", type=Path, help="listagem do asset store (texto)")
    ap.add_argument("--repo", default=Path("design-system"), type=Path)
    ap.add_argument("--report", type=Path)
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--blobs", type=Path, help="pasta com os blobs baixados (para --apply)")
    a = ap.parse_args()

    pub, repo = a.published.resolve(), a.repo.resolve()
    for d, name in ((pub, "--published"), (repo, "--repo")):
        if not (d / "tokens.json").is_file() or not (d / "design-system.json").is_file():
            print(f"{name}: {d} não tem tokens.json e design-system.json", file=sys.stderr)
            return 1

    # ---- arquivos de texto e fontes
    pf, rf = files_under(pub), files_under(repo)
    changed = sorted(k for k in pf if k in rf and sha(pf[k]) != sha(rf[k]))
    added = sorted(k for k in pf if k not in rf)
    removed = sorted(k for k in rf if k not in pf and not any(rx.match(k) for rx in REPO_ONLY))

    # ---- assets (pelo sha256 do asset store)
    store = {}
    if a.assets:
        for m in BLOB_LINE.finditer(a.assets.read_text(encoding="utf-8")):
            store[m.group(1)] = {"size": int(m.group(2)), "sha256": m.group(3)}
    pa, ra = asset_map(pub), asset_map(repo)
    a_changed, a_added, a_removed, missing, fetch = [], [], [], [], set()
    for key, blob in sorted(pa.items()):
        group, fname = key
        path = f"assets/{group}/{fname}"
        local = repo / "assets" / group / fname
        if blob not in store:
            if a.assets:
                missing.append({"path": path, "blob": blob})
            continue
        if not local.is_file():
            a_added.append({"path": path, "blob": blob}); fetch.add(blob)
        elif sha(local) != store[blob]["sha256"]:
            a_changed.append({"path": path, "blob": blob}); fetch.add(blob)
    for key in sorted(set(ra) - set(pa)):
        a_removed.append({"path": f"assets/{key[0]}/{key[1]}"})
    if not a.assets:
        print("Aviso: sem --assets, fotos, logos, ícones e capas não foram comparados.", file=sys.stderr)

    vp, vr = release(pub), release(repo)
    relation = "igual" if vp == vr else ("publicado-a-frente" if vkey(vp) > vkey(vr) else "repo-a-frente")
    report = {
        "in_sync": not (changed or added or removed or a_changed or a_added or a_removed),
        "version": {"published": vp, "repo": vr, "relation": relation},
        "files": {"changed": changed, "added": added, "removed": removed},
        "assets": {"changed": a_changed, "added": a_added, "removed": a_removed, "missing_in_store": missing},
        "fetch": sorted(fetch),
    }

    # ---- resumo
    log = lambda s: print(s, file=sys.stderr)
    log(f"Versão: publicado {vp or '?'} · repositório {vr or '?'} ({relation})")
    for label, items in (("alterado", changed), ("novo", added), ("removido", removed)):
        for i in items:
            log(f"  arquivo {label}: {i}")
    for label, items in (("alterado", a_changed), ("novo", a_added), ("removido", a_removed)):
        for i in items:
            log(f"  asset {label}: {i['path']}")
    for i in missing:
        log(f"  ATENÇÃO: blob {i['blob']} de {i['path']} não está na listagem do asset store")
    log("Em sincronia." if report["in_sync"] else "Há diferenças.")

    # ---- aplicar
    if a.apply and not report["in_sync"]:
        if fetch and not a.blobs:
            log("--apply precisa de --blobs com os blobs de 'fetch' baixados."); return 1
        for k in changed + added:
            dst = repo / k; dst.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(pf[k], dst)
        for k in removed:
            (repo / k).unlink()
        for item in a_changed + a_added:
            cands = [p for p in a.blobs.iterdir() if p.name == item["blob"] or p.name.startswith(item["blob"] + ".")]
            if not cands:
                log(f"Blob {item['blob']} não encontrado em {a.blobs}"); return 1
            if sha(cands[0]) != store[item["blob"]]["sha256"]:
                log(f"Blob {item['blob']} baixado não confere com o sha256 da listagem"); return 1
            dst = repo / item["path"]; dst.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(cands[0], dst)
        for item in a_removed:
            p = repo / item["path"]
            if p.exists():
                p.unlink()
        log("Aplicado no repositório. Revise com git diff.")

    out = json.dumps(report, ensure_ascii=False, indent=2)
    if a.report:
        a.report.write_text(out + "\n", encoding="utf-8")
    else:
        print(out)
    return 0 if report["in_sync"] else 10


if __name__ == "__main__":
    sys.exit(main())
