"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Track, RepeatMode } from "@/types/music";

interface UseAudioPlayerProps {
  tracks: Track[];
  onFinishAlbum?: () => void;
}

export function useAudioPlayer({ tracks, onFinishAlbum }: UseAudioPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState<RepeatMode>("all");
  const [audioError, setAudioError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const simulationRef = useRef<NodeJS.Timeout | null>(null);

  const currentTrack = tracks[currentIndex] || tracks[0];

  const parseDurationString = useCallback((dur?: string): number => {
    if (!dur) return 180;
    const parts = dur.split(":").map(Number);
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      return parts[0] * 60 + parts[1];
    }
    return 180;
  }, []);

  // Initialize shared audio instance
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.volume = 0.85;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setAudioError(null);
      if (audio.duration && !isNaN(audio.duration) && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };

    const handleError = () => {
      const track = tracks[currentIndex];
      setAudioError(
        `File "${track?.audioUrl || ""}" belum ditemukan di folder public/music/. Pemutar berjalan dalam simulasi.`
      );
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("error", handleError);
      audioRef.current = null;
    };
  }, [currentIndex, tracks]);

  // Seek
  const seek = useCallback((time: number) => {
    setCurrentTime(time);
    const audio = audioRef.current;
    if (audio) {
      try {
        audio.currentTime = time;
      } catch {
        // Ignored in simulation
      }
    }
  }, []);

  // Play
  const play = useCallback(() => {
    const audio = audioRef.current;
    setIsPlaying(true);
    if (audio) {
      audio.play().catch(() => {
        setAudioError(
          `File "${currentTrack.audioUrl}" belum ditemukan di folder public/music/. Pemutar berjalan dalam simulasi.`
        );
      });
    }
  }, [currentTrack]);

  // Pause
  const pause = useCallback(() => {
    const audio = audioRef.current;
    setIsPlaying(false);
    if (audio) {
      audio.pause();
    }
  }, []);

  // Next Track
  const nextTrack = useCallback(() => {
    let nextIndex = currentIndex + 1;
    if (isShuffle) {
      const candidates = tracks
        .map((_, i) => i)
        .filter((i) => i !== currentIndex);
      if (candidates.length > 0) {
        nextIndex = candidates[Math.floor(Math.random() * candidates.length)];
      }
    } else if (nextIndex >= tracks.length) {
      if (repeatMode === "all") {
        nextIndex = 0;
      } else {
        pause();
        if (onFinishAlbum) {
          onFinishAlbum();
        }
        return;
      }
    }
    setCurrentIndex(nextIndex);
  }, [currentIndex, isShuffle, tracks, repeatMode, pause, onFinishAlbum]);

  // Prev Track
  const prevTrack = useCallback(() => {
    if (currentTime > 3) {
      seek(0);
      return;
    }
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = tracks.length - 1;
    }
    setCurrentIndex(prevIndex);
  }, [currentTime, currentIndex, tracks.length, seek]);

  // Select track directly
  const selectTrack = useCallback((index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  }, [tracks.length]);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  // Volume
  const setVolume = useCallback((val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    setIsMuted(clamped === 0);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  }, []);

  // Mute toggle
  const toggleMute = useCallback(() => {
    if (isMuted) {
      setIsMuted(false);
      const targetVol = volume > 0 ? volume : 0.85;
      if (audioRef.current) audioRef.current.volume = targetVol;
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
    }
  }, [isMuted, volume]);

  // Shuffle toggle
  const toggleShuffle = useCallback(() => {
    setIsShuffle((prev) => !prev);
  }, []);

  // Handle track end event
  const handleTrackEnd = useCallback(() => {
    if (repeatMode === "one") {
      seek(0);
      play();
    } else {
      nextTrack();
    }
  }, [repeatMode, seek, play, nextTrack]);

  // Attach onEnded listener to shared audio instance
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.onended = handleTrackEnd;
    return () => {
      audio.onended = null;
    };
  }, [handleTrackEnd]);

  // Sync track change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.audioUrl;
    audio.load();

    if (isPlaying) {
      audio.play().catch(() => {
        setAudioError(
          `File "${currentTrack.audioUrl}" belum ditemukan di folder public/music/. Pemutar berjalan dalam simulasi.`
        );
      });
    }
  }, [currentTrack, isPlaying]);

  // Simulation timer fallback if missing file
  useEffect(() => {
    if (isPlaying && audioError) {
      simulationRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const maxDur = duration || parseDurationString(currentTrack.duration);
          if (prev >= maxDur) {
            handleTrackEnd();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (simulationRef.current) {
        clearInterval(simulationRef.current);
      }
    }

    return () => {
      if (simulationRef.current) {
        clearInterval(simulationRef.current);
      }
    };
  }, [isPlaying, audioError, duration, currentTrack, parseDurationString, handleTrackEnd]);

  return {
    currentTrack,
    currentIndex,
    isPlaying,
    currentTime,
    duration: duration || parseDurationString(currentTrack.duration),
    volume,
    isMuted,
    isShuffle,
    repeatMode,
    audioError,
    play,
    pause,
    togglePlay,
    nextTrack,
    prevTrack,
    selectTrack,
    seek,
    setVolume,
    toggleMute,
    toggleShuffle,
    setRepeatMode,
  };
}
