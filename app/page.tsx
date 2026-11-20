"use client";

import React, { useState } from "react";
import OpeningLetter from "@/components/OpeningLetter";
import AlbumPlayer from "@/components/AlbumPlayer";
import EndingScreen from "@/components/EndingScreen";
import { tracks, albumMetadata } from "@/data/tracks";

export default function Home() {
  const [isLetterOpen, setIsLetterOpen] = useState(true);
  const [isEndingOpen, setIsEndingOpen] = useState(false);

  const handleOpenAlbum = () => {
    setIsLetterOpen(false);
    setIsEndingOpen(false);
  };

  const handleFinishAlbum = () => {
    setIsEndingOpen(true);
  };

  const handleRestartAlbum = () => {
    setIsEndingOpen(false);
    setIsLetterOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#d4d0c8] flex flex-col justify-between selection:bg-[#2a2820] selection:text-[#f5f2ea]">
      {/* Opening Letter Screen */}
      <OpeningLetter
        isOpen={isLetterOpen}
        onOpenAlbum={handleOpenAlbum}
      />

      {/* Main Experience */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-5xl mx-auto w-full">
        {isEndingOpen ? (
          <EndingScreen
            onRestartAlbum={handleRestartAlbum}
            onReturnToPlayer={() => setIsEndingOpen(false)}
            onReadLetterAgain={() => setIsLetterOpen(true)}
          />
        ) : (
          <AlbumPlayer
            tracks={tracks}
            onOpenLetter={() => setIsLetterOpen(true)}
            onFinishAlbum={handleFinishAlbum}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 border-t border-white/5 text-center text-[10px] font-mono tracking-widest text-[#3d3b36] uppercase">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <span>{albumMetadata.title}</span>
          <span className="hidden sm:inline">·</span>
          <span>{albumMetadata.catalogNumber}</span>
          <span className="hidden sm:inline">·</span>
          <button
            onClick={() => setIsEndingOpen(true)}
            className="hover:text-[#8e8b82] underline underline-offset-4 transition"
          >
            Lihat Catatan Penutup
          </button>
        </div>
      </footer>
    </div>
  );
}
