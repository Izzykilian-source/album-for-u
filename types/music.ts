export type TrackType = "song" | "spoken";
export type VinylSide = "A" | "B";

export interface Track {
  id: string;
  order: number;
  side: VinylSide;
  trackCode: string; // e.g. "A-01", "B-05"
  title: string;
  artist: string;
  audioUrl: string;
  type: TrackType;
  recordedAt?: string;
  linerNote: string[]; // Authentic personal reflections, written like physical album booklet notes
  duration?: string;
}

export type RepeatMode = "none" | "one" | "all";
