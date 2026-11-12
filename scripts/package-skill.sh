#!/usr/bin/env bash
# Empacota a skill id-liveidea para upload no claude.ai
# (Configurações > Capacidades > Skills > Enviar skill). Gera dist/id-liveidea.zip.
#
# O ZIP leva uma cópia do design system (snapshot/design-system/), tirada da main do GitHub no momento
# do empacotamento, com snapshot/VERSION registrando versão e commit. Ela serve para duas coisas:
#   - as fontes da cópia são a reserva quando a versão baixada vem sem fontes (conector que só lê texto);
#   - último caso: sem nenhum acesso ao repositório, e só com o consentimento do usuário, a skill
#     aplica a marca a partir dessa cópia (sync_ds.sh --snapshot), avisando versão e data.
# Em uso normal, tudo continua vindo da main a cada uso.
#
# Fontes licenciadas (Acumin Pro ExtraCondensed, PP Editorial New, Aeonik): o ZIP é de uso interno da
# LIVEIDEA. Não publique nem envie para fora da agência.
#
# Uso: bash scripts/package-skill.sh [--ref main] [--sem-fotos]
#   --sem-fotos  deixa de fora assets/Fotografia e assets/Capas (~7 MB), se o upload recusar o tamanho
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REF="main"; NO_PHOTOS=0
while [ $# -gt 0 ]; do
  case "$1" in
    --ref) REF="${2:?informe a ref}"; shift 2 ;;
    --sem-fotos) NO_PHOTOS=1; shift ;;
    *) echo "Opção desconhecida: $1" >&2; exit 1 ;;
  esac
done
SRC="$ROOT/.claude/skills/id-liveidea"
OUT="$ROOT/dist"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

git -C "$ROOT" fetch --quiet origin "$REF"
COMMIT="$(git -C "$ROOT" rev-parse --short FETCH_HEAD)"
VERSION="$(git -C "$ROOT" show FETCH_HEAD:design-system/tokens.json | python3 -c 'import json,sys; print(json.load(sys.stdin)["meta"]["release"])')"
DATE="$(git -C "$ROOT" show FETCH_HEAD:design-system/CHANGELOG.md | grep -m1 -E '^## [0-9]+\.[0-9]+\.[0-9]+' | sed -E 's/^## [0-9.]+ · ?//')"

SK="$TMP/id-liveidea"
mkdir -p "$SK"
cp -R "$SRC/." "$SK/"
rm -rf "$SK/snapshot" "$SK/fonts"
mkdir -p "$SK/snapshot"
git -C "$ROOT" archive FETCH_HEAD design-system | tar -x -C "$SK/snapshot"
if [ "$NO_PHOTOS" = 1 ]; then rm -rf "$SK/snapshot/design-system/assets/Fotografia" "$SK/snapshot/design-system/assets/Capas"; fi
printf 'v%s · %s · %s@%s · empacotado em %s%s\n' "$VERSION" "$DATE" "$REF" "$COMMIT" "$(date -u +%Y-%m-%d)" \
  "$([ "$NO_PHOTOS" = 1 ] && echo ' · sem fotos' || true)" > "$SK/snapshot/VERSION"

mkdir -p "$OUT"
rm -f "$OUT/id-liveidea.zip"
(cd "$TMP" && zip -qr "$OUT/id-liveidea.zip" id-liveidea -x '*/__pycache__/*' '*.pyc' '*/.DS_Store')
SIZE="$(du -h "$OUT/id-liveidea.zip" | cut -f1)"
echo "Skill empacotada em $OUT/id-liveidea.zip ($SIZE · cópia v$VERSION, $REF@$COMMIT$([ "$NO_PHOTOS" = 1 ] && echo ', sem fotos' || true))"
