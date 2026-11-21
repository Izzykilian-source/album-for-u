"use client";

import React from "react";
import { RotateCcw } from "lucide-react";
import { albumMetadata } from "@/data/tracks";

interface EndingScreenProps {
  onRestartAlbum: () => void;
  onReturnToPlayer: () => void;
  onReadLetterAgain: () => void;
}

export default function EndingScreen({
  onRestartAlbum,
  onReturnToPlayer,
  onReadLetterAgain,
}: EndingScreenProps) {
  return (
    <div className="w-full max-w-lg mx-auto py-12 px-4 flex flex-col text-left animate-fade-up space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 text-[10px] font-mono tracking-widest uppercase text-[#5a574f]">
        <span>Run-Out Groove — End of Side B</span>
        <span>{albumMetadata.catalogNumber}</span>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-serif text-[#d4d0c8] font-normal tracking-tight italic">
          Terima kasih sudah mendengarkan sampai habis.
        </h2>
        <div className="text-[14px] sm:text-[15px] font-serif text-[#8e8b82] leading-[1.85] space-y-3">
          <p>
            albumnya belum selesai disini sih, bakal update terus, waalaupunn nanti kita sudah ngga jadi kita lagii mwmeheheeh
          </p>
          <p>
            sampaiii saatt ituuu punn kamuu akan tetep bisa akses album inii dann akuu akan selalu update mwehehheheh
          </p>
          <p className="text-xs font-mono text-[#3d3b36] pt-2">
            Recorded in 2026. Keep this link safe.
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          onClick={onRestartAlbum}
          className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#d4d0c8] text-[#0a0c10] text-xs font-mono tracking-wider uppercase hover:bg-[#e8e5dd] active:scale-[0.97] transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Putar Ulang dari Side A</span>
        </button>

        <button
          onClick={onReturnToPlayer}
          className="px-5 py-2.5 border border-white/8 hover:border-white/15 text-[#9e9a90] hover:text-[#d4d0c8] text-xs font-mono tracking-wider uppercase transition text-center"
        >
          Kembali ke Player
        </button>
      </div>

      <button
        onClick={onReadLetterAgain}
        className="text-xs font-mono text-[#3d3b36] hover:text-[#8e8b82] underline underline-offset-4 transition text-left"
      >
        Baca kembali surat pengantar
      </button>
    </div>
  );
}
