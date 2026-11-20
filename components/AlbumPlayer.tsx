"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Track } from "@/types/music";
import { albumMetadata } from "@/data/tracks";
import PlayerControls from "./PlayerControls";
import TrackList from "./TrackList";
import StoryPanel from "./StoryPanel";
import InterludeScreen from "./InterludeScreen";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface AlbumPlayerProps {
  tracks: Track[];
  onOpenLetter: () => void;
  onFinishAlbum: () => void;
}

export default function AlbumPlayer({
  tracks,
  onOpenLetter,
  onFinishAlbum,
}: AlbumPlayerProps) {
  const [activeTab, setActiveTab] = useState<"story" | "list">("story");
  const [showInterludeFocus, setShowInterludeFocus] = useState(false);

  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isShuffle,
    repeatMode,
    audioError,
    togglePlay,
    nextTrack,
    prevTrack,
    selectTrack,
    seek,
    setVolume,
    toggleMute,
    toggleShuffle,
    setRepeatMode,
  } = useAudioPlayer({
    tracks,
    onFinishAlbum,
  });

  const isAboutYou = currentTrack.id === "about-you";
  const isInterlude = currentTrack.id === "interlude";

  const handleToggleRepeat = () => {
    if (repeatMode === "none") setRepeatMode("all");
    else if (repeatMode === "all") setRepeatMode("one");
    else setRepeatMode("none");
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col space-y-6">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#3d3b36] uppercase">
            <span>{albumMetadata.catalogNumber}</span>
            <span>·</span>
            <span>33 ⅓ RPM STEREO</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-serif text-[#d4d0c8] tracking-tight mt-1 italic">
            {albumMetadata.title}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenLetter}
            className="text-xs font-mono tracking-wider text-[#5a574f] hover:text-[#d4d0c8] underline underline-offset-4 transition"
          >
            Baca Catatan Pengantar
          </button>
        </div>
      </header>

      {/* Audio Missing Notice */}
      {audioError && (
        <div className="p-3 bg-[#12141b] border border-white/5 text-[11px] font-mono text-[#8e8b82] flex items-center justify-between gap-3">
          <div className="truncate">
            <span className="text-[#c49a5c] mr-2">[SIMULATION]</span>
            <span>File <code className="text-[#d4d0c8]">{currentTrack.audioUrl}</code> belum ada.</span>
          </div>
          <span className="text-[#3d3b36] text-[9px] uppercase tracking-widest flex-shrink-0">
            Preview Mode
          </span>
        </div>
      )}

      {/* Interlude Screen or Main View */}
      {isInterlude && showInterludeFocus ? (
        <div className="bg-[#0e1016] border border-white/5 p-6 sm:p-10">
          <InterludeScreen
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
            onContinueToAboutYou={() => {
              setShowInterludeFocus(false);
              const aboutYouIdx = tracks.findIndex((t) => t.id === "about-you");
              if (aboutYouIdx !== -1) {
                selectTrack(aboutYouIdx);
              }
            }}
          />
        </div>
      ) : (
        /* Main Album View */
        <main
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border p-6 sm:p-8 transition-colors duration-700 ${
            isAboutYou
              ? "bg-[#11100e] border-[#2a2518]"
              : "bg-[#0e1016] border-white/5"
          }`}
        >
          {/* Left Column: Album Art + Controls */}
          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-6">
            {/* Album cover as disc — replaces vinyl */}
            <div className="relative my-2 select-none">
              <div
                className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden relative transition-transform duration-700 shadow-2xl shadow-black/50 ${
                  isPlaying ? "animate-vinyl" : ""
                }`}
              >
                {/* Cover image as disc face */}
                <Image
                  src="/images/cover.jpg"
                  alt="Album cover"
                  fill
                  className="object-cover"
                />
                {/* Dark overlay to resemble disc */}
                <div className="absolute inset-0 bg-[#0a0c10]/30 pointer-events-none" />
                {/* Groove rings */}
                <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-white/[0.03] pointer-events-none" />

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full flex flex-col items-center justify-center p-2 text-center transition-colors ${
                      isAboutYou
                        ? "bg-[#1a1710]/90 backdrop-blur-sm"
                        : "bg-[#0a0c10]/85 backdrop-blur-sm"
                    }`}
                  >
                    <span className="font-mono text-[7px] uppercase tracking-widest text-[#5a574f]">
                      Side {currentTrack.side}
                    </span>
                    <span className="font-mono text-[10px] font-semibold tracking-wider text-[#d4d0c8] mt-0.5">
                      {currentTrack.trackCode}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#0a0c10] border border-white/10 mt-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div className="space-y-1.5 max-w-md">
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#3d3b36]">
                <span>Track {String(currentTrack.order).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}</span>
                <span>·</span>
                <span>Side {currentTrack.side}</span>
              </div>

              <h2 className={`text-2xl sm:text-3xl font-serif font-normal tracking-tight ${
                isAboutYou ? "text-[#c49a5c] italic" : "text-[#d4d0c8]"
              }`}>
                {currentTrack.title}
              </h2>
              <p className="text-xs font-mono text-[#5a574f]">
                {currentTrack.artist}
              </p>

              {/* Interlude shortcut */}
              {isInterlude && (
                <button
                  onClick={() => setShowInterludeFocus(true)}
                  className="mt-2 text-xs font-mono text-[#c49a5c] hover:text-[#d4d0c8] underline underline-offset-4"
                >
                  Buka tampilan pesan suara
                </button>
              )}
            </div>

            {/* Player Controls */}
            <div className="w-full max-w-sm pt-2">
              <PlayerControls
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                volume={volume}
                isMuted={isMuted}
                isShuffle={isShuffle}
                repeatMode={repeatMode}
                onTogglePlay={togglePlay}
                onNext={nextTrack}
                onPrev={prevTrack}
                onSeek={seek}
                onVolumeChange={setVolume}
                onToggleMute={toggleMute}
                onToggleShuffle={toggleShuffle}
                onToggleRepeat={handleToggleRepeat}
              />
            </div>
          </div>

          {/* Right Column: Liner Notes / Tracklist */}
          <div className="lg:col-span-6 flex flex-col h-full min-h-[460px] bg-[#0b0d13] p-5 border border-white/[0.04]">
            {/* Tab Switcher */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("story")}
                  className={`text-xs font-mono tracking-wider uppercase pb-1 transition border-b-2 ${
                    activeTab === "story"
                      ? "border-[#c49a5c] text-[#d4d0c8] font-semibold"
                      : "border-transparent text-[#5a574f] hover:text-[#8e8b82]"
                  }`}
                >
                  Liner Notes
                </button>
                <span className="text-[#2a2820] text-xs">/</span>
                <button
                  onClick={() => setActiveTab("list")}
                  className={`text-xs font-mono tracking-wider uppercase pb-1 transition border-b-2 ${
                    activeTab === "list"
                      ? "border-[#c49a5c] text-[#d4d0c8] font-semibold"
                      : "border-transparent text-[#5a574f] hover:text-[#8e8b82]"
                  }`}
                >
                  Tracklist
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#3d3b36]">
                {activeTab === "list" ? `${tracks.length} Tracks` : currentTrack.trackCode}
              </span>
            </div>

            {/* Tab Body */}
            <div className="flex-1 flex flex-col justify-center">
              {activeTab === "list" ? (
                <TrackList
                  tracks={tracks}
                  currentTrackId={currentTrack.id}
                  isPlaying={isPlaying}
                  onSelectTrack={selectTrack}
                />
              ) : (
                <StoryPanel
                  trackTitle={currentTrack.title}
                  artist={currentTrack.artist}
                  trackCode={currentTrack.trackCode}
                  recordedAt={currentTrack.recordedAt}
                  linerNote={currentTrack.linerNote}
                  isSpecialTrack={isAboutYou}
                />
              )}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
