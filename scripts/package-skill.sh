#!/usr/bin/env bash
# Empacota a skill liveidea-design-system para upload no claude.ai
# (Configurações > Capacidades > Skills > Enviar skill). Gera dist/liveidea-design-system.zip.
# A skill não leva cores, fontes nem assets: ela busca a última versão da main do GitHub a cada uso.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/.claude/skills/liveidea-design-system"
OUT="$ROOT/dist"
mkdir -p "$OUT"
rm -f "$OUT/liveidea-design-system.zip"
(cd "$SRC/.." && zip -qr "$OUT/liveidea-design-system.zip" liveidea-design-system \
  -x '*/__pycache__/*' '*.pyc' '*/.DS_Store')
echo "Skill empacotada em $OUT/liveidea-design-system.zip"
