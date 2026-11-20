"use client";

import React from "react";

interface StoryPanelProps {
  trackTitle: string;
  artist: string;
  trackCode: string;
  recordedAt?: string;
  linerNote: string[];
  isSpecialTrack?: boolean;
}

export default function StoryPanel({
  trackTitle,
  artist,
  trackCode,
  recordedAt,
  linerNote,
  isSpecialTrack = false,
}: StoryPanelProps) {
  return (
    <div className="w-full flex flex-col h-full space-y-4">
      {/* Header */}
      <div className="flex items-baseline justify-between pb-2.5 border-b border-white/5 text-[10px] font-mono tracking-widest uppercase text-[#5a574f]">
        <div>
          <span>Liner Notes — {trackCode}</span>
          {recordedAt && (
            <span className="text-[#3d3b36] ml-2 font-normal">[{recordedAt}]</span>
          )}
        </div>
        {isSpecialTrack && (
          <span className="text-[#c49a5c] border border-[#c49a5c]/20 px-1.5 py-0.5 text-[9px]">
            The 1975
          </span>
        )}
      </div>

      {/* Track Title */}
      <div>
        <h3 className={`text-xl sm:text-2xl font-serif font-normal tracking-tight ${
          isSpecialTrack ? "text-[#c49a5c] italic" : "text-[#d4d0c8]"
        }`}>
          {trackTitle}
        </h3>
        <p className="text-xs text-[#5a574f] font-mono mt-0.5">
          Originally by {artist}
        </p>
      </div>

      {/* Liner Note Body */}
      <div className="flex-1 max-h-[360px] overflow-y-auto pr-3 space-y-4 py-1 custom-scrollbar">
        {linerNote.map((paragraph, idx) => (
          <p
            key={idx}
            className={`text-[14px] sm:text-[15px] font-serif leading-[1.85] tracking-normal ${
              isSpecialTrack
                ? "text-[#b8b0a0] first:text-[16px] first:italic"
                : "text-[#8e8b82]"
            }`}
          >
            {paragraph}
          </p>
        ))}

        <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-[#3d3b36]">
          <span>CAT. SBU-1975</span>
          <span className="italic font-serif text-xs text-[#5a574f]">— recorded for you</span>
        </div>
      </div>
    </div>
  );
}
