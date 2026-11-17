#!/usr/bin/env python3
"""Confere se a skill id-liveidea está em dia com o design system deste repositório.
Roda no GitHub Actions a cada push e pull request e na rotina quinzenal.

Falha (código 1) quando:
  1. a versão do design system diverge entre tokens.json, CHANGELOG.md e o topo do README.md;
  2. o design system está numa versão MINOR ou MAJOR mais nova que a revisada na skill
     (`design_system_revisado` em .claude/skills/id-liveidea/skill.json);
  3. o design system tem componente que a skill não conhece (`componentes` em skill.json) ou a skill
     lista componente que não existe mais;
  4. o kit não monta (sync_ds.sh --local) ou os helpers de PowerPoint e Word quebram com ele.

Avisa, sem falhar: TEMPLATES_FROM de liveidea_pptx.py atrás da versão, lastChange do design-system.json
sem a versão na nota, bibliotecas python-pptx/python-docx ausentes (pula a prova dos helpers).

Uso: python3 scripts/check_skill.py [--repo .] [--sem-kit]
Depois de revisar a skill para uma versão nova: atualize skill.json e rode de novo.
"""
import argparse, json, os, re, subprocess, sys, tempfile
from pathlib import Path

errors, warnings = [], []


def vtuple(v):
    try:
        return tuple(int(x) for x in v.split("."))
    except (AttributeError, ValueError):
        return (0, 0, 0)


def changelog_since(text, since):
    """Títulos das entradas do CHANGELOG mais novas que `since`."""
    out = []
    for m in re.finditer(r"^## ([0-9]+\.[0-9]+\.[0-9]+)(.*)$", text, re.M):
        if vtuple(m.group(1)) > vtuple(since):
            out.append(f"{m.group(1)}{m.group(2)}")
    return out


def smoke(skill_scripts, kit):
    """Gera um slide e um documento mínimos com os helpers, sem depender de navegador."""
    code = r'''
import sys, tempfile, os
sys.path.insert(0, sys.argv[1])
from liveidea_pptx import Deck
from liveidea_docx import Doc
kit, out = sys.argv[2], tempfile.mkdtemp()
d = Deck(kit)
s = d.slide("nevoa")
d.eyebrow(s, 1, "Insight", x=160, y=200)
d.text(s, "No Brasil, a gente <em>comemora.</em>", "headline-l", x=160, y=260, w=900, em_color="laranja")
d.stat(s, "+50", "PESSOAS", x=1100, y=260, w=600, note="PÚBLICO ESTIMADO")
d.rule(s, 160, 700, 1600)
d.chrome(s)
g = d.slide("grafite"); d.chrome(g)
d.save(os.path.join(out, "teste.pptx"))
w = Doc(kit)
w.eyebrow("Proposta comercial", 1)
w.title("Verão <em>2026</em>")
w.heading("O que <em>entregamos</em>")
w.para("Texto corrido de teste.")
w.stats([("+ 50.000", "PESSOAS"), ("5 <em>dias</em>", "DE MONTAGEM")])
w.table(["Item", "Valor"], [["Cenografia", "R$ 120.000"]])
w.save(os.path.join(out, "teste.docx"))
'''
    r = subprocess.run([sys.executable, "-c", code, str(skill_scripts), str(kit)], capture_output=True, text=True)
    return r.returncode, (r.stdout + r.stderr).strip()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--repo", default=".", type=Path)
    ap.add_argument("--sem-kit", action="store_true", help="não monta o kit nem testa os helpers")
    a = ap.parse_args()
    repo = a.repo.resolve()
    ds = repo / "design-system"
    skill = repo / ".claude" / "skills" / "id-liveidea"

    # ---- 1. versão do design system
    tokens = json.loads((ds / "tokens.json").read_text(encoding="utf-8"))
    version = tokens.get("meta", {}).get("release", "")
    changelog = (ds / "CHANGELOG.md").read_text(encoding="utf-8")
    m = re.search(r"^## ([0-9]+\.[0-9]+\.[0-9]+)", changelog, re.M)
    cl_version = m.group(1) if m else ""
    m = re.search(r"Versão ([0-9]+\.[0-9]+\.[0-9]+)", (ds / "README.md").read_text(encoding="utf-8")[:400])
    rd_version = m.group(1) if m else ""
    if not (version == cl_version == rd_version):
        errors.append(f"Versão divergente: tokens.json {version or '?'} · CHANGELOG.md {cl_version or '?'} · "
                      f"README.md {rd_version or '?'}. As três mudam juntas.")
    note = json.loads((ds / "design-system.json").read_text(encoding="utf-8")).get("lastChange", {}).get("note", "")
    if version and not note.startswith(f"v{version}"):
        warnings.append(f"design-system.json lastChange.note não começa por v{version}: \"{note[:60]}...\"")

    # ---- 2. versão revisada na skill
    meta_path = skill / "skill.json"
    meta = json.loads(meta_path.read_text(encoding="utf-8"))
    reviewed = meta.get("design_system_revisado", "")
    if vtuple(version)[:2] > vtuple(reviewed)[:2]:
        since = changelog_since(changelog, reviewed)
        errors.append(f"A skill foi revisada para o design system {reviewed} e o repositório está na {version}. "
                      "Revise SKILL.md, references/ e scripts/ contra estas entradas do CHANGELOG e atualize "
                      f"design_system_revisado em skill.json: {'; '.join(since) or '(sem entradas)'}")
    elif vtuple(reviewed) > vtuple(version):
        errors.append(f"skill.json diz {reviewed}, mais novo que o design system ({version}).")
    elif vtuple(version) > vtuple(reviewed):
        warnings.append(f"Design system {version} (PATCH) à frente da revisão da skill ({reviewed}): sem regra nova, "
                        "mas atualize skill.json quando conferir.")
    pptx_src = (skill / "scripts" / "liveidea_pptx.py").read_text(encoding="utf-8")
    m = re.search(r'^TEMPLATES_FROM = "([0-9.]+)"', pptx_src, re.M)
    if m and vtuple(version)[:2] > vtuple(m.group(1))[:2]:
        warnings.append(f"TEMPLATES_FROM = {m.group(1)} em liveidea_pptx.py, design system em {version}: confirme se "
                        "capas, Ghost, Chrome ou grid mudaram e suba o valor quando os modelos estiverem conferidos.")

    # ---- 3. componentes
    in_ds = sorted(p.parent.name for p in (ds / "components").glob("*/README.md"))
    known = sorted(meta.get("componentes", []))
    new, gone = sorted(set(in_ds) - set(known)), sorted(set(known) - set(in_ds))
    if new:
        errors.append(f"Componentes novos no design system que a skill não conhece: {', '.join(new)}. Veja onde "
                      "entram (references/) e inclua em skill.json.")
    if gone:
        errors.append(f"Componentes listados na skill que não existem mais: {', '.join(gone)}. Tire das "
                      "references/ e de skill.json.")

    # ---- 4. kit e helpers
    if not a.sem_kit:
        with tempfile.TemporaryDirectory() as cache:
            env = dict(os.environ, LIVEIDEA_DS_CACHE=cache)
            r = subprocess.run(["bash", str(skill / "scripts" / "sync_ds.sh"), "--local", str(repo)],
                               capture_output=True, text=True, env=env)
            if r.returncode != 0:
                errors.append(f"O kit não montou (sync_ds.sh --local, código {r.returncode}): {r.stderr.strip()[-600:]}")
            else:
                kit = Path(cache) / "kit"
                try:
                    import pptx, docx  # noqa: F401
                except ImportError:
                    warnings.append("python-pptx ou python-docx ausente: helpers não testados.")
                else:
                    rc, out = smoke(skill / "scripts", kit)
                    if rc != 0:
                        errors.append(f"Os helpers quebraram com o kit da versão {version}: {out[-800:]}")

    # ---- resumo
    print(f"Design system {version or '?'} · skill revisada para {reviewed or '?'} · "
          f"{len(in_ds)} componentes")
    for w in warnings:
        print(f"AVISO: {w}")
    for e in errors:
        print(f"ERRO: {e}")
    if errors:
        print("A skill não está em dia com o design system.")
        return 1
    print("Skill em dia com o design system.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
