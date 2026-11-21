"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface InterludeScreenProps {
  onContinueToAboutYou: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function InterludeScreen({
  onContinueToAboutYou,
  isPlaying,
  onTogglePlay,
}: InterludeScreenProps) {
  return (
    <div className="w-full max-w-lg mx-auto py-10 px-4 flex flex-col text-left animate-fade-up space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono tracking-widest uppercase text-[#5a574f]">
        <span>Transition Memo — B-04</span>
        <span className="text-[#c49a5c]">Side B</span>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-serif text-[#d4d0c8] font-normal tracking-tight italic">
          &ldquo;Tarik napas sebentar...&rdquo;
        </h2>
        <p className="text-sm font-serif text-[#8e8b82] leading-[1.85]">
          Ini rekaman suara singkat sebelum kita masuk ke lagu berikutnya.
          iniii laguu kesukaan kamuuuuu
        </p>
      </div>

      {/* Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          onClick={onTogglePlay}
          className="px-5 py-2.5 border border-white/8 hover:border-white/15 text-[#9e9a90] hover:text-[#d4d0c8] text-xs font-mono tracking-wider uppercase transition"
        >
          {isPlaying ? "Pause Memo" : "Play Spoken Memo"}
        </button>

        <button
          onClick={onContinueToAboutYou}
          className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#d4d0c8] text-[#0a0c10] text-xs font-mono tracking-wider uppercase hover:bg-[#e8e5dd] active:scale-[0.97] transition"
        >
          <span>Putar About You</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-[11px] font-mono text-[#3d3b36]">
        Next: The 1975 — About You (Track B-05)
      </p>
    </div>
  );
}
