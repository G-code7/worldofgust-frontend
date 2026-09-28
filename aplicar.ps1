# aplicar.ps1 — Aplica la reestructuración sin dejar archivos viejos.
# Ejecutar desde la RAIZ del repo (donde esta package.json), con el zip al lado.
# Uso:  powershell -ExecutionPolicy Bypass -File aplicar.ps1

$ErrorActionPreference = "Stop"
$zip = "worldofgust-frontend-repo.zip"

if (-not (Test-Path package.json)) { throw "Ejecuta esto en la raiz del repo (falta package.json)." }
if (-not (Test-Path $zip)) { throw "No encuentro $zip en esta carpeta." }

Write-Host "1/5  Borrando estructura vieja (src, caches y configs reemplazados)..."
# La clave: borrar src/ COMPLETO antes de extraer, para que no queden rutas viejas.
Remove-Item -Recurse -Force src, .next -ErrorAction SilentlyContinue
Remove-Item -Force next.config.ts, tsconfig.json, postcss.config.mjs -ErrorAction SilentlyContinue

Write-Host "2/5  Extrayendo la version nueva..."
Expand-Archive -Path $zip -DestinationPath . -Force

Write-Host "3/5  Instalando dependencias..."
npm install

Write-Host "4/5  Lint..."
npm run lint

Write-Host "5/5  Build (sin RESEND_API_KEY)..."
$env:NEXT_PUBLIC_WORDPRESS_API_URL = "https://api.worldofgust.com/graphql"
npm run build

Write-Host ""
Write-Host "Listo. Revisa con 'git status' y luego:" -ForegroundColor Green
Write-Host "  git checkout -b feat/i18n-restructure"
Write-Host "  git add -A; git commit -m 'feat: bilingual restructure'"
