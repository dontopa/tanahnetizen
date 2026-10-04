# TanahNetizen 🏡

Landing page hartanah untuk ejen property **TanahNetizen** — projek showcase portfolio.

![Logo](assets/logo.svg)

## Ciri-ciri
- **Hero video** latar (drone shot banglo tropika) — dijana dengan Higgsfield (Seedance 2.0 Mini, 720p)
- **6 listing hartanah** dengan gambar dijana Higgsfield (Nano Banana) + tapisan jenis/status
- **Popup details hartanah**: galeri 5 gambar (anak panah, thumbnail, swipe, papan kekunci), deskripsi, jadual maklumat, kemudahan, kalkulator pinjaman (untuk jualan), butang Deal & Book Viewing via WhatsApp. Setiap hartanah ada link sendiri, cth. `#hartanah/kondo-klcc`
- **Butang WhatsApp** di mana-mana: nav, hero, setiap kad listing (mesej auto isi nama & harga hartanah), CTA dan butang terapung
- Logo & favicon siap (SVG, PNG, ICO, apple-touch-icon, web manifest)
- Responsif (desktop → mobile), animasi reveal & kaunter statistik, `prefers-reduced-motion` dihormati
- HTML/CSS/JS tulen — tiada build step

## Jalankan
Buka `index.html` terus dalam browser, atau:
```bash
python3 -m http.server 8000
```

## Tambah / ubah hartanah
Semua data listing ada dalam array `LISTINGS` di `assets/js/main.js` (tajuk, harga, `gallery`, `desc`, `details`, `features`).

## Tukar nombor WhatsApp
Edit `WA_NUMBER` di `assets/js/main.js` (format: `60123456789`). Nombor `tel:` dalam `index.html` juga boleh ditukar.

## Aset Higgsfield
Visual dihidang terus dari CDN Higgsfield. Untuk simpan salinan local dalam repo:
```bash
bash scripts/download-assets.sh
```

## Deploy
Static site — sesuai untuk GitHub Pages (Settings → Pages → branch `main`, folder `/`), Netlify atau Vercel.
