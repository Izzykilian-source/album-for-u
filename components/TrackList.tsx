"use client";

import React from "react";
import { Track } from "@/types/music";

interface TrackListProps {
  tracks: Track[];
  currentTrackId: string;
  isPlaying: boolean;
  onSelectTrack: (index: number) => void;
}

export default function TrackList({
  tracks,
  currentTrackId,
  isPlaying,
  onSelectTrack,
}: TrackListProps) {
  const sideATracks = tracks.filter((t) => t.side === "A");
  const sideBTracks = tracks.filter((t) => t.side === "B");

  const renderTrackRow = (track: Track) => {
    const originalIndex = tracks.findIndex((t) => t.id === track.id);
    const isActive = track.id === currentTrackId;
    const isCurrentlyPlaying = isActive && isPlaying;
    const isAboutYou = track.id === "about-you";

    return (
      <button
        key={track.id}
        onClick={() => onSelectTrack(originalIndex)}
        className={`w-full group text-left py-2.5 px-3 flex items-center justify-between transition-colors border-b border-white/[0.03] ${
          isActive
            ? "bg-white/[0.03] text-[#d4d0c8]"
            : "hover:bg-white/[0.02] text-[#8e8b82] hover:text-[#d4d0c8]"
        }`}
      >
        <div className="flex items-baseline gap-3.5 min-w-0 pr-2">
          {/* Track Code */}
          <span
            className={`font-mono text-[11px] tracking-wider flex-shrink-0 ${
              isActive ? "text-[#c49a5c] font-semibold" : "text-[#3d3b36]"
            }`}
          >
            {track.trackCode}
          </span>

          {/* Title & Artist */}
          <div className="min-w-0 flex items-baseline gap-2 truncate">
            <span
              className={`text-sm tracking-tight truncate ${
                isActive
                  ? "font-medium text-[#d4d0c8]"
                  : "text-[#9e9a90] group-hover:text-[#d4d0c8]"
              } ${isAboutYou ? "font-serif italic text-base" : ""}`}
            >
              {track.title}
            </span>

            {track.type === "spoken" && (
              <span className="text-[9px] font-mono tracking-widest text-[#3d3b36] uppercase">
                / spoken
              </span>
            )}

            {isAboutYou && (
              <span className="text-[9px] font-mono tracking-widest text-[#c49a5c]/60 uppercase">
                / the 1975
              </span>
            )}
          </div>
        </div>

        {/* Duration or Playing Indicator */}
        <div className="flex items-center gap-2.5 flex-shrink-0 pl-2">
          {isCurrentlyPlaying ? (
            <div className="flex items-end gap-[2px] h-3 w-3">
              <span className="w-[1.5px] bg-[#c49a5c] anim-bar-1 h-full" />
              <span className="w-[1.5px] bg-[#c49a5c] anim-bar-2 h-2/3" />
              <span className="w-[1.5px] bg-[#c49a5c] anim-bar-3 h-4/5" />
            </div>
          ) : (
            <span className="font-mono text-[10px] text-[#3d3b36] group-hover:text-[#5a574f]">
              {track.duration || "--:--"}
            </span>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="w-full flex flex-col space-y-4 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
      {/* SIDE A */}
      <div>
        <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-white/5 text-[10px] font-mono tracking-widest uppercase text-[#3d3b36]">
          <span>Side A — The Opening</span>
          <span>6 Tracks</span>
        </div>
        <div className="divide-y divide-transparent">
          {sideATracks.map(renderTrackRow)}
        </div>
      </div>

      {/* SIDE B */}
      <div className="pt-2">
        <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-white/5 text-[10px] font-mono tracking-widest uppercase text-[#3d3b36]">
          <span>Side B — Late Night Reflections</span>
          <span>5 Tracks</span>
        </div>
        <div className="divide-y divide-transparent">
          {sideBTracks.map(renderTrackRow)}
        </div>
      </div>
    </div>
  );
}
