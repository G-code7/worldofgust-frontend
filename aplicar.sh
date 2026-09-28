#!/usr/bin/env bash
# aplicar.sh — Aplica la reestructuracion sin dejar archivos viejos (macOS/Linux/WSL).
# Ejecutar desde la raiz del repo, con el zip al lado.
set -euo pipefail
ZIP="worldofgust-frontend-repo.zip"
[ -f package.json ] || { echo "Ejecuta esto en la raiz del repo (falta package.json)."; exit 1; }
[ -f "$ZIP" ] || { echo "No encuentro $ZIP en esta carpeta."; exit 1; }

echo "1/5  Borrando estructura vieja..."
rm -rf src .next next.config.ts tsconfig.json postcss.config.mjs

echo "2/5  Extrayendo la version nueva..."
unzip -oq "$ZIP"

echo "3/5  Instalando dependencias..."
npm install

echo "4/5  Lint..."
npm run lint

echo "5/5  Build..."
NEXT_PUBLIC_WORDPRESS_API_URL="https://api.worldofgust.com/graphql" npm run build

echo ""
echo "Listo. git checkout -b feat/i18n-restructure && git add -A && git commit -m 'feat: bilingual restructure'"
