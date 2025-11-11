import type { ITrack } from "./music.types";

export async function fetchFromSpotify<T>(
    endpoint: string,
    params?: Record<string, string>
): Promise<T> {
    const url = new URL(`https://api.spotify.com/v1/${endpoint}`);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }
    const response = await fetch(url.toString());
    const data =  await response.json() as {data: T}
    return data.data;
}

const track = await fetchFromSpotify<ITrack>('tracks');