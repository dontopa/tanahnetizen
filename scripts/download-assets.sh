#!/usr/bin/env bash
# Muat turun semua visual Higgsfield ke assets/media/ dan tukar URL CDN dalam
# index.html & assets/js/main.js kepada laluan local.
# Guna: bash scripts/download-assets.sh
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/media
urls=$(grep -ohE 'https://d8j0ntlcm91z4\.cloudfront\.net/[^"'"'"' )]+' index.html assets/js/main.js | sort -u)
for u in $urls; do
  f="assets/media/$(basename "$u")"
  [ -f "$f" ] || curl -fsSL -o "$f" "$u"
  echo "ok  $f"
done
# CDN prefix dalam main.js
sed -i.bak -E "s#https://d8j0ntlcm91z4\.cloudfront\.net/[^/]+/#assets/media/#g" index.html assets/js/main.js
rm -f index.html.bak assets/js/main.js.bak
echo "Siap. Semua aset kini dihidang dari assets/media/."
