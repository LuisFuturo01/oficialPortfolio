#!/usr/bin/env bash
# Prepara un repo para publicarlo sin secretos ni dependencias.
# Uso: prepare_repo.sh <carpeta> "<mensaje de commit>"
set -euo pipefail
dir="$1"; msg="$2"
cd "$dir"
[ -d .git ] || git init -q -b main

IGNORE=(
  "node_modules/" "__pycache__/" "*.pyc" "venv/" ".venv/"
  ".env" ".env.*" "!.env.example" "*credenciales*.json" "credenciales*.txt"
  ".kilo/" ".vscode/" "*.log" ".DS_Store" "Thumbs.db"
)
touch .gitignore
for p in "${IGNORE[@]}"; do grep -qxF "$p" .gitignore || echo "$p" >> .gitignore; done

# Deja de versionar lo que ahora está ignorado (los archivos siguen en disco)
git ls-files -ci --exclude-standard -z | xargs -0 -r git rm -q --cached --
git add -A
if git diff --cached --quiet; then echo "sin cambios: $dir"; exit 0; fi
git commit -q -m "$msg" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
echo "commit: $dir -> $(git log -1 --format=%h)"
