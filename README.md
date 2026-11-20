# somewhere between the songs and you.

> *"14 songs, sung by me, inspired by you."*

Sebuah website album musik digital personal yang dirancang khusus sebagai ruang arsip cerita dan lagu-lagu cover.

---

## 📁 Struktur Direktori

```text
somewhere-between-us/
├── app/
│   ├── layout.tsx         # Metadata, font serif & sans, theme
│   ├── page.tsx           # State orchestrator (Letter -> Album -> Ending)
│   └── globals.css        # Tailwind v4, scrollbars, animasi
├── components/
│   ├── OpeningLetter.tsx  # Surat pembuka sebelum masuk album
│   ├── AlbumPlayer.tsx    # Komponen utama player & visualizer vinyl
│   ├── PlayerControls.tsx # Tombol play, pause, seek, volume, shuffle, repeat
│   ├── TrackList.tsx      # Daftar trek & indikator bermain
│   ├── LyricsPanel.tsx    # Lirik tersinkronisasi per detik (karaoke/seek)
│   ├── InterludeScreen.tsx# Momen jeda spesial sebelum About You
│   └── EndingScreen.tsx   # Layar penutup & tombol putar ulang
├── data/
│   ├── tracks.ts          # Konfigurasi terpusat semua trek & info album
│   └── lyrics.ts          # Lirik & timestamp setiap lagu
├── hooks/
│   └── useAudioPlayer.ts  # Shared HTML5 Audio instance & state manager
├── types/
│   └── music.ts           # Definisi TypeScript untuk Track, Lyrics, dll.
├── public/
│   ├── music/             # Letak file MP3 kamu
│   └── images/            # Asset gambar/cover (opsional)
└── package.json
```

---

## 🎧 Cara Menambahkan / Mengganti Audio

1. Letakkan rekaman MP3 kamu di dalam folder `public/music/` dengan penamaan:
   - `intro.mp3`
   - `yang-terlewatkan.mp3`
   - `who-knows.mp3`
   - `lantas.mp3`
   - `waktu-yang-salah.mp3`
   - `back-to-friends.mp3`
   - `sadrah.mp3`
   - `serana.mp3`
   - `when-i-was-your-man.mp3`
   - `interlude.mp3`
   - `about-you.mp3`

2. Jika file MP3 belum dimasukkan, website akan tetap berjalan lancar dalam **mode simulasi** sehingga kamu bisa menguji seluruh tampilan dan tombol tanpa khawatir error.

---

## ✍️ Cara Menyesuaikan Lirik & Timestamp

Buka file `data/lyrics.ts`. Setiap lagu memiliki array baris lirik dengan format:

```typescript
"about-you": [
  { time: 0, text: "[Intro musik]" },
  { time: 18, text: "I know a place..." },
  { time: 28, text: "It's somewhere I go when I need to remember your face" }
]
```

- `time`: detik di mana lirik mulai dinyanyikan pada rekaman kamu.
- `text`: baris teks lirik.

---

## 🚀 Menjalankan Project Secara Lokal

Jalankan perintah berikut di terminal:

```bash
# Menjalankan server pengembangan lokal
npm run dev
```

Buka browser di `http://localhost:3000`.

---

## 🌐 Panduan Deployment ke GitHub & Vercel

### 1. Inisialisasi Git & Push ke GitHub

Jika kamu ingin membuat repository baru di GitHub:

```bash
git add .
git commit -m "feat: complete somewhere between the songs and you website"
git branch -M main
git remote add origin https://github.com/<username-kamu>/<nama-repo-kamu>.git
git push -u origin main
```

### 2. Hubungkan ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub kamu.
2. Klik tombol **"Add New..."** -> **"Project"**.
3. Pilih repository GitHub yang baru saja kamu push.
4. Framework Preset akan otomatis terdeteksi sebagai **Next.js**.
5. Klik **"Deploy"**.
6. Dalam hitungan detik, website kamu sudah aktif online dengan tautan HTTPS!

Setiap kali kamu melakukan perubahan (misalnya menambah lagu baru atau mengedit lirik) dan melakukan `git push`, Vercel akan otomatis melakukan update deployment.
