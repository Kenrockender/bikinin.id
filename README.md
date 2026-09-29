# bikinin.id

Repositori untuk **bikinin.id** — jasa pembuatan website & aplikasi custom yang menyasar UMKM dan bisnis kecil di Indonesia dengan positioning "cepat, transparan, langsung sama yang ngerjain".

Repo ini menampung tiga hal:

1. **Landing page** brand (folder `website/`) — sudah live, static site + satu serverless function untuk menangkap lead.
2. **Materi go-to-market** — `roadmap.md` (rencana peluncuran) dan `video scripts.md` (skrip konten TikTok/Reels).
3. **Halaman demo** (`website/dummy/`) — contoh sebelum/sesudah yang dipakai untuk konten dan peraga penjualan.

## Tentang brand

| | |
|---|---|
| **Nama** | bikinin.id |
| **Positioning** | Generalist (web + app), cepat & harga reasonable |
| **Model bisnis** | Project one-time + retainer bulanan |
| **Tone** | Casual, bahasa campur ID/EN |
| **Warna brand** | Biru (navy) + aksen emas |
| **Kontak** | WhatsApp `0816-3100-800` (`wa.me/628163100800`) |

### Paket yang ditawarkan

**Project (one-time):**
- Landing / Profile Site — mulai Rp 1jt (±1 minggu)
- Website Bisnis Lengkap — mulai Rp 2jt (±2–3 minggu)
- App / Sistem Custom — mulai Rp 6jt (timeline sesuai scope)

**Retainer (bulanan):**
- Basic (DIY, dijagain) — Rp 500rb/bulan
- Standar (Done-With-You) — Rp 1jt/bulan
- Prioritas (Done-For-You) — Rp 3jt/bulan

> Angka di atas mengikuti isi landing page saat ini dan ditandai sebagai "harga launching". Sumber kebenaran ada di `website/index.html`.

## Struktur repositori

```
.
├── README.md              # File ini
├── roadmap.md             # Rencana peluncuran & fase pertumbuhan
├── video scripts.md       # Skrip 3 video pertama + ritme posting
└── website/
    ├── index.html         # Landing page utama (HTML + CSS + JS, single file)
    ├── api/
    │   └── lead.js         # Serverless function: menerima submission form (POST /api/lead)
    ├── assets/            # Logo, favicon, ikon, OG image
    └── dummy/             # Halaman demo untuk konten & peraga
        ├── kopi-selasar-berantakan/   # Contoh website "jelek" (before)
        ├── kopi-selasar-rapi/         # Versi rapi (after)
        └── kopi-selasar-dashboard/    # Contoh dashboard pesanan
```

## Landing page (`website/`)

Landing page adalah **static site** yang seluruh markup, style, dan script-nya ada dalam satu file `website/index.html`. Tidak ada build step, tidak ada `package.json`, tidak ada framework — cukup buka file HTML-nya.

**Isi halaman:** hero → kenapa kami → contoh kerja (carousel proyek dengan live demo) → harga → retainer → FAQ → form booking → footer. Dibangun mobile-first dengan navigasi hamburger, animasi reveal saat scroll, dan menghormati `prefers-reduced-motion`.

### Alur form booking

Saat form dikirim, script di `index.html`:
1. Memvalidasi field wajib (nama, WA, bisnis, jenis kebutuhan, deskripsi).
2. Mengirim data lead ke `POST /api/lead` (fire-and-forget) dan mencatat event analytics.
3. Membuka WhatsApp (`wa.me/628163100800`) dengan pesan yang sudah terisi otomatis dari input form.

### Serverless function (`api/lead.js`)

Function sederhana bergaya Vercel yang hanya menerima `POST`, mencatat payload lead ke log (`console.log`), dan membalas `{ ok: true }`. Method selain `POST` dibalas `405`. Function ini belum mem-persist lead ke storage mana pun — hanya logging.

## Menjalankan secara lokal

Karena ini static site, cara paling cepat cukup buka file-nya:

```bash
# Opsi 1: langsung buka di browser
open website/index.html      # macOS
xdg-open website/index.html  # Linux

# Opsi 2: server statis (form akan buka WhatsApp; /api/lead butuh runtime Vercel)
npx serve website
# atau
python3 -m http.server --directory website 8000
```

Untuk mengetes endpoint `/api/lead` secara lokal beserta routing serverless-nya, jalankan lewat Vercel CLI:

```bash
npm i -g vercel
vercel dev
```

## Deployment

Situs di-deploy sebagai static site + serverless function di **Vercel** (terlihat dari integrasi Vercel Web Analytics pada `index.html` dan pola `api/lead.js`). File di `website/` disajikan sebagai root situs, dan `website/api/lead.js` otomatis menjadi endpoint `/api/lead`.

## Materi go-to-market

- **`roadmap.md`** — identitas brand, status terkini, dan rencana 4 fase (setup → konten & DM pertama → bukti sosial → konsistensi & retainer), termasuk hal-hal yang masih perlu diputuskan.
- **`video scripts.md`** — skrip lengkap 3 video pertama (POV build, before/after, "kenapa website lambat"), plus caption dan ritme posting yang disarankan. Halaman `dummy/` dipakai sebagai peraga di video ini supaya tidak perlu memakai proyek client asli.
