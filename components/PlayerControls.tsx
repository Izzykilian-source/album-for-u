"use client";

import React from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  VolumeX,
} from "lucide-react";
import { RepeatMode } from "@/types/music";

interface PlayerControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isShuffle: boolean;
  repeatMode: RepeatMode;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
  onToggleShuffle: () => void;
  onToggleRepeat: () => void;
}

export default function PlayerControls({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  isShuffle,
  repeatMode,
  onTogglePlay,
  onNext,
  onPrev,
  onSeek,
  onVolumeChange,
  onToggleMute,
  onToggleShuffle,
  onToggleRepeat,
}: PlayerControlsProps) {
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="w-full flex flex-col space-y-4">
      {/* Scrubber */}
      <div className="w-full space-y-1.5">
        <div className="relative flex items-center group py-1 cursor-pointer">
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={(e) => onSeek(parseFloat(e.target.value))}
            className="w-full h-[2px] bg-[#1a1c22] rounded-none appearance-none cursor-pointer focus:outline-none accent-[#c49a5c] hover:h-[3px] transition-all"
            aria-label="Seek track"
          />
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#5a574f]">
          <span>{formatTime(currentTime)}</span>
          <span className="text-[#2a2820]">STEREO</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Transport Controls */}
      <div className="flex items-center justify-between sm:justify-center gap-3 sm:gap-6 pt-1">
        {/* Shuffle */}
        <button
          onClick={onToggleShuffle}
          className={`p-2 transition-colors ${
            isShuffle ? "text-[#c49a5c]" : "text-[#3d3b36] hover:text-[#8e8b82]"
          }`}
          aria-label="Acak urutan"
          title="Shuffle"
        >
          <Shuffle className="w-3.5 h-3.5" />
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          className="p-2 text-[#8e8b82] hover:text-[#d4d0c8] active:scale-95 transition"
          aria-label="Lagu sebelumnya"
          title="Previous Track"
        >
          <SkipBack className="w-4 h-4 fill-current" />
        </button>

        {/* Play/Pause */}
        <button
          onClick={onTogglePlay}
          className="w-12 h-12 rounded-full bg-[#d4d0c8] text-[#0a0c10] flex items-center justify-center hover:bg-[#e8e5dd] active:scale-95 transition"
          aria-label={isPlaying ? "Jeda" : "Putar"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          className="p-2 text-[#8e8b82] hover:text-[#d4d0c8] active:scale-95 transition"
          aria-label="Lagu berikutnya"
          title="Next Track"
        >
          <SkipForward className="w-4 h-4 fill-current" />
        </button>

        {/* Repeat */}
        <button
          onClick={onToggleRepeat}
          className={`p-2 transition-colors relative ${
            repeatMode !== "none"
              ? "text-[#c49a5c]"
              : "text-[#3d3b36] hover:text-[#8e8b82]"
          }`}
          aria-label={`Mode ulang: ${repeatMode}`}
          title={`Repeat: ${repeatMode}`}
        >
          <Repeat className="w-3.5 h-3.5" />
          {repeatMode === "one" && (
            <span className="absolute -top-1 -right-1 text-[8px] font-mono text-[#c49a5c]">
              1
            </span>
          )}
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center justify-center gap-2 pt-1 max-w-xs mx-auto text-[#5a574f]">
        <button
          onClick={onToggleMute}
          className="p-1 hover:text-[#d4d0c8] transition"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5 text-[#3d3b36]" />
          ) : (
            <Volume2 className="w-3.5 h-3.5" />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={isMuted ? 0 : volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-20 sm:w-24 h-[2px] bg-[#1a1c22] appearance-none cursor-pointer accent-[#8e8b82]"
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
