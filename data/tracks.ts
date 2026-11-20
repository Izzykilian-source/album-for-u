import { Track } from "@/types/music";

export interface AlbumMetadata {
  catalogNumber: string;
  title: string;
  subtitle: string;
  edition: string;
  masteringNote: string;
}

export const albumMetadata: AlbumMetadata = {
  catalogNumber: "SBU-1975-LP",
  title: "somewhere between the songs and you.",
  subtitle: "14 songs, sung by me, inspired by you.",
  edition: "Private First Pressing — For You Only",
  masteringNote: "Recorded late at night in a quiet bedroom. Kept raw and unpolished on purpose.",
};

export const tracks: Track[] = [
  // SIDE A
  {
    id: "intro",
    order: 1,
    side: "A",
    trackCode: "A-01",
    title: "Intro",
    artist: "Personal voice recording",
    audioUrl: "/music/intro.mp3",
    type: "spoken",
    duration: "01:15",
    recordedAt: "01:42 AM",
    linerNote: [
      "Suaraku mungkin agak serak di rekaman ini. Waktu itu sudah lewat jam satu malam, dan aku merekam semuanya sendirian di kos, saat suasana sudah cukup sepi.",
      "Sebelum kamu mulai mendengarkan, aku cuma mau bilang terima kasih sudah meluangkan waktu untuk membuka album kecil ini.",
      "Aku membuat ini bukan untuk menunjukkan seberapa bagus aku bernyanyi. Sebenarnya, ada beberapa hal yang ingin aku sampaikan, tapi rasanya tidak selalu mudah untuk diucapkan secara langsung.",
      "Jadi, aku coba menyampaikannya lewat lagu-lagu ini.",
      "Tidak semuanya sempurna, tapi semuanya aku rekam sendiri, khusus untuk kamu.",
      "Anggap saja ini teman kecil untuk menemani waktu luangmu. Semoga ada satu atau dua lagu yang bisa kamu ingat setelah selesai mendengarkannya.",
      "Selamat mendengarkan, ya."
    ],
  },
  {
    id: "yang-terlewatkan",
    order: 2,
    side: "A",
    trackCode: "A-02",
    title: "Yang Terlewatkan",
    artist: "Sheila on 7",
    audioUrl: "/music/yang-terlewatkan.mp3",
    type: "song",
    duration: "04:12",
    recordedAt: "Late night take",
    linerNote: [
      "Lagu ini selalu bikin dada agak ngilu. Bukan karena sedih, tapi karena mengingatkanku pada obrolan-obrolan kita yang sering kubaca ulang.",
      "Cara kamu ketawa waktu kita saling kirim pesan konyol, atau waktu dengar suaramu cerita hal sepele lewat telepon dan aku cuma bisa mendengarkan sambil senyum-senyum sendiri di depan layar.",
      "Ternyata hal-hal sesederhana itu yang paling nempel di kepala."
    ],
  },
  {
    id: "who-knows",
    order: 3,
    side: "A",
    trackCode: "A-03",
    title: "Who Knows",
    artist: "Daniel Caesar",
    audioUrl: "/music/who-knows.mp3",
    type: "song",
    duration: "03:45",
    recordedAt: "Acoustic session",
    linerNote: [
      "Siapa yang tahu ke mana arah hidup bakal bawa kita berdua nanti.",
      "Kita terpisah jarak dan belum pernah bertatap muka langsung. Kadang aku overthinking mikirin masa depan. Tapi tiap kali ingat kamu, ada rasa tenang yang susah dijelasin.",
      "Yang kutahu pasti cuma satu: perasaanku ke kamu hari ini sangat nyata, menembus semua jarak itu."
    ],
  },
  {
    id: "lantas",
    order: 4,
    side: "A",
    trackCode: "A-04",
    title: "Lantas",
    artist: "Juicy Luicy",
    audioUrl: "/music/lantas.mp3",
    type: "song",
    duration: "03:50",
    recordedAt: "Take 03",
    linerNote: [
      "Ada masa di mana aku berusaha keras bersikap biasa saja. Berlagak cuek, pura-pura nggak kepikiran, tapi ujung-ujungnya tetap bolak-balik ngecek notifikasi di HP nunggu pesan darimu.",
      "Lagu ini untuk momen-momen di mana logika kalah telak sama perasaan. Dan anehnya, aku nggak pernah menyesal pernah kalah."
    ],
  },
  {
    id: "waktu-yang-salah",
    order: 5,
    side: "A",
    trackCode: "A-05",
    title: "Waktu yang Salah",
    artist: "Fiersa Besari",
    audioUrl: "/music/waktu-yang-salah.mp3",
    type: "song",
    duration: "04:08",
    recordedAt: "Midnight recording",
    linerNote: [
      "Kadang semesta suka bikin skenario yang rumit. Rasa yang datang di saat jarak memisahkan kita berdua.",
      "Tapi kalau boleh milih, aku tetap milih mengenalmu dengan segala jaraknya, daripada hidup tenang tanpa pernah tahu rasanya disapa olehmu setiap hari."
    ],
  },
  {
    id: "back-to-friends",
    order: 6,
    side: "A",
    trackCode: "A-06",
    title: "Back to Friends",
    artist: "sombr",
    audioUrl: "/music/back-to-friends.mp3",
    type: "song",
    duration: "02:58",
    recordedAt: "Room tape",
    linerNote: [
      "Kembali jadi sekadar teman? Jujur, itu hal paling bohong yang pernah terlintas di pikiranku.",
      "Mana bisa menganggap biasa seseorang yang pesan singkatnya saja bisa langsung mengubah mood-ku seharian."
    ],
  },

  // SIDE B
  {
    id: "sadrah",
    order: 7,
    side: "B",
    trackCode: "B-01",
    title: "Sadrah",
    artist: "For Revenge",
    audioUrl: "/music/sadrah.mp3",
    type: "song",
    duration: "04:02",
    recordedAt: "Evening guitar",
    linerNote: [
      "Mencintai lewat jarak itu belajar tentang kerendahan hati dan kesabaran. Nggak memaksakan kehendak, nggak menuntut apa-apa.",
      "Tahu kalau kamu baik-baik saja dan harimu menyenangkan di sana, sudah cukup buat bikin hariku di sini ikut tenang."
    ],
  },
  {
    id: "serana",
    order: 8,
    side: "B",
    trackCode: "B-02",
    title: "Serana",
    artist: "For Revenge",
    audioUrl: "/music/serana.mp3",
    type: "song",
    duration: "04:06",
    recordedAt: "Take 02",
    linerNote: [
      "Bagian reff lagu ini lumayan nguras napas pas direkam.",
      "Lagu ini untuk malam-malam sepi di mana aku cuma bisa melihat namamu di layar HP, menahan rindu sambil berharap suatu hari nanti jarak ini nggak lagi jadi penghalang buat kita."
    ],
  },
  {
    id: "when-i-was-your-man",
    order: 9,
    side: "B",
    trackCode: "B-03",
    title: "When I Was Your Man",
    artist: "Bruno Mars",
    audioUrl: "/music/when-i-was-your-man.mp3",
    type: "song",
    duration: "03:33",
    recordedAt: "Piano demo",
    linerNote: [
      "Satu pengingat buat diriku sendiri: kamu terlalu berharga untuk diabaikan atau dianggap biasa.",
      "Meskipun kita belum bisa ketemu langsung, kamu tetap layak diperlakukan dengan penuh hormat, didengarkan tiap kali ingin cerita, dan merasa dihargai setiap hari."
    ],
  },
  {
    id: "interlude",
    order: 10,
    side: "B",
    trackCode: "B-04",
    title: "Interlude",
    artist: "Personal voice recording",
    audioUrl: "/music/interlude.mp3",
    type: "spoken",
    duration: "01:30",
    recordedAt: "Tape memo",
    linerNote: [
      "Tarik napas dulu.",
      "Lagu setelah ini adalah alasan utama kenapa proyek rekaman ini aku selesaikan sampai tuntas. Khusus buat kamu, jangan di-skip ya."
    ],
  },
  {
    id: "about-you",
    order: 11,
    side: "B",
    trackCode: "B-05",
    title: "About You",
    artist: "The 1975",
    audioUrl: "/music/about-you.mp3",
    type: "song",
    duration: "05:26",
    recordedAt: "Final Take / 02:40 AM",
    linerNote: [
      "The 1975. Lagu yang selalu kamu putar.",
      "Tiap kali intro gitar dan synth dreamy lagu ini mulai mengalun, suasananya langsung terasa sunyi dan hangat. Aku selalu membayangkan hari di mana kita akhirnya bisa ketemu langsung untuk pertama kalinya, duduk berdampingan tanpa ada layar ponsel di antara kita.",
      "'Do you think I have forgotten about you?'",
      "Nggak pernah. Sedetik pun nggak pernah.",
      "Lagu ini seutuhnya buat kamu."
    ],
  },
];
