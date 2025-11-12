import { useState, type ReactNode } from "react";
import type { ITrack } from "./types/music.types";


export function SpotifyWrapper({children}: { children: ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);
    const [queue, setQueue] = useState<ITrack[]>([]);

    return <div>{children}</div>
}
