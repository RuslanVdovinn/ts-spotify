import type { ITrack } from "./music.types";

const recentlyPlayed: ITrack[] = []

const topTracks: ReadonlyArray<ITrack> = []

type TAudioVisualizerBar = [frequency: number, amplitude: number]

type TTimeFormat = [minutes: number, seconds: number]
const timeFormat: TTimeFormat = [0, 0]

function formatDuration(duration: number): TTimeFormat {
    return [Math.floor(duration / 60), duration % 60]
}
