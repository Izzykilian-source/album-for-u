"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { albumMetadata } from "@/data/tracks";

interface OpeningLetterProps {
  isOpen: boolean;
  onOpenAlbum: () => void;
}

export default function OpeningLetter({
  isOpen,
  onOpenAlbum,
}: OpeningLetterProps) {
  const [isReadingLetter, setIsReadingLetter] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080a0e]">
      {/* Atmospheric bokeh blobs — large blurred circles like the cover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full bg-[#c49a5c]/10 blur-3xl top-[15%] left-[10%] animate-bokeh-1" />
        <div className="absolute w-40 h-40 rounded-full bg-[#6e8da8]/8 blur-3xl top-[60%] right-[8%] animate-bokeh-2" />
        <div className="absolute w-24 h-24 rounded-full bg-[#c49a5c]/6 blur-2xl bottom-[20%] left-[55%] animate-bokeh-3" />
        <div className="absolute w-28 h-28 rounded-full bg-[#8ca4b8]/6 blur-3xl top-[35%] right-[30%] animate-bokeh-1" />
      </div>

      <div className="relative w-full max-w-xl mx-4 sm:mx-6 z-10">
        {!isReadingLetter ? (
          /* Cover screen with album art */
          <div className="flex flex-col items-center text-center space-y-8 animate-fade-up">
            {/* Album Cover Image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex-shrink-0 shadow-2xl shadow-black/40">
              <Image
                src="/images/cover.jpg"
                alt="somewhere between the songs and you — album cover"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title below cover */}
            <div className="space-y-2 animate-fade-up-delay-1">
              <h1 className="text-2xl sm:text-3xl font-serif text-[#d4d0c8] tracking-tight leading-tight italic">
                {albumMetadata.title}
              </h1>
              <p className="text-xs font-mono tracking-wider text-[#5a574f]">
                {albumMetadata.subtitle}
              </p>
            </div>

            {/* Brief quote */}
            <p className="text-sm font-serif text-[#8e8b82] leading-relaxed max-w-sm italic animate-fade-up-delay-2">
              &ldquo;Haiiiii beeee akuuu buat inii karena akuu sangat sangatt berterimakasiiih karena kamu selalu appreciate apapun yang akuuu lakukan untuk kamu.&rdquo;
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 animate-fade-up-delay-3">
              <button
                onClick={() => setIsReadingLetter(true)}
                className="text-xs font-mono tracking-wider text-[#5a574f] hover:text-[#d4d0c8] underline underline-offset-4 transition py-2 order-2 sm:order-1"
              >
                Baca Catatan Pengantar
              </button>

              <button
                onClick={onOpenAlbum}
                className="flex items-center justify-center gap-2 px-7 py-3 bg-[#d4d0c8] text-[#0a0c10] text-xs font-mono tracking-wider uppercase hover:bg-[#e8e5dd] active:scale-[0.97] transition order-1 sm:order-2"
              >
                <span>Buka Album</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Full Letter Screen */
          <div className="flex flex-col space-y-6 animate-fade-up bg-[#0e1016] border border-white/5 p-6 sm:p-10">
            {/* Header */}
            <div className="border-b border-white/5 pb-3 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[#5a574f]">
              <span>Surat Pengantar — SBU-1975</span>
              <span>Side A / B</span>
            </div>

            {/* Letter Body */}
            <div className="text-[14px] sm:text-[15px] font-serif text-[#9e9a90] leading-[1.85] space-y-4 max-h-[52vh] overflow-y-auto pr-3 custom-scrollbar">
              <p>hai beee,</p>
              <p>
                halaupun aku tauu kitaa nggga akan bisa ketemuu in real life, akuu sangatt sangatt menikmatii momenn inii ketika bersama kamu.
              </p>
              <p>
                akuuu sangatt senanngg sekalii bisa ketemu kamuu dan bisa kenal sama kamuu walaupun akuu selalu gangguin kamuu mwehehehe dan tanpa sadar kamuu menjadii bagian dari keseharianku.
              </p>
              <p>
                akuu sangatttt senang kamu selaluu apprecia hal hal yang aku lakukan untuk kamuu, akuu sangatt berterimaa kasihhhh
              </p>
              <p>
                soooo aku mencoba merekam beberapa lagu ini. satu per satu, dengan suaraku sendiri, sesederhana yang aku bisa.
              </p>
              <p>
                walaupuunn akuu tauu hasilnyaa jelekk karna kualitas audioo dan suarakuu memangg bwuoooossookk mwehehehehe tapiiii akuu harapp kamuu ga nyesel dengerinnyaa
              </p>
              <p>
                ada satu lagu khusus di trek terakhir, laguu yang kamuu bilang kamuu sukaa walaupunn sakitt lagunyaa hehehehee
              </p>
              <p>
                kamuuu bisa dengerinn iniii kapannpunn kamuu mauuuu
              </p>
              <p>
                semoga kamu suka.
              </p>
              <p className="pt-2 italic text-[#c4bfb2]">
                yaaaa ini ngarep ngarepaann kuu ajaaa sii, semogaaa nanti aku bisa nyanyiin kamuu langsunggg di depannn kamuuu mwehehehehehe loppp uuu ❤
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
              <button
                onClick={() => setIsReadingLetter(false)}
                className="text-xs font-mono text-[#5a574f] hover:text-[#9e9a90] underline underline-offset-4 transition"
              >
                Kembali
              </button>

              <button
                onClick={onOpenAlbum}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#d4d0c8] text-[#0a0c10] text-xs font-mono tracking-wider uppercase hover:bg-[#e8e5dd] active:scale-[0.97] transition"
              >
                <span>Mulai Putar Album</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
