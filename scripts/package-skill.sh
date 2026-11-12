#!/usr/bin/env bash
# Empacota a skill liveidea-design-system para upload no claude.ai
# (Configurações > Capacidades > Skills > Enviar skill). Gera dist/liveidea-design-system.zip.
#
# O ZIP leva as fontes do design system (pasta fonts/), copiadas da main do GitHub no momento do
# empacotamento, com fonts/VERSION registrando versão e commit. Elas são a reserva da skill quando a
# versão baixada vem sem os arquivos de fonte (ex.: conector GitHub que só lê texto). Cores, regras e
# assets continuam vindo da main a cada uso.
#
# Fontes licenciadas (Acumin Pro ExtraCondensed, PP Editorial New, Aeonik): o ZIP é de uso interno da
# LIVEIDEA. Não publique nem envie para fora da agência.
#
# Uso: bash scripts/package-skill.sh [--ref main]
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REF="main"
[ "${1:-}" = "--ref" ] && REF="${2:?informe a ref}"
SRC="$ROOT/.claude/skills/liveidea-design-system"
OUT="$ROOT/dist"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT

git -C "$ROOT" fetch --quiet origin "$REF"
COMMIT="$(git -C "$ROOT" rev-parse --short FETCH_HEAD)"
VERSION="$(git -C "$ROOT" show FETCH_HEAD:design-system/tokens.json | python3 -c 'import json,sys; print(json.load(sys.stdin)["meta"]["release"])')"

mkdir -p "$TMP/liveidea-design-system"
cp -R "$SRC/." "$TMP/liveidea-design-system/"
rm -rf "$TMP/liveidea-design-system/fonts"
git -C "$ROOT" archive FETCH_HEAD design-system/fonts | tar -x -C "$TMP"
mv "$TMP/design-system/fonts" "$TMP/liveidea-design-system/fonts"
printf 'v%s · %s@%s · empacotado em %s\n' "$VERSION" "$REF" "$COMMIT" "$(date -u +%Y-%m-%d)" \
  > "$TMP/liveidea-design-system/fonts/VERSION"

mkdir -p "$OUT"
rm -f "$OUT/liveidea-design-system.zip"
(cd "$TMP" && zip -qr "$OUT/liveidea-design-system.zip" liveidea-design-system \
  -x '*/__pycache__/*' '*.pyc' '*/.DS_Store')
N="$(ls "$TMP/liveidea-design-system/fonts"/*.woff2 | wc -l)"
echo "Skill empacotada em $OUT/liveidea-design-system.zip (fontes v$VERSION, $REF@$COMMIT, $N arquivos)"
