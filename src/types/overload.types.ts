import type { IArtist, ITrack } from "./music.types";
import type { IPlayList } from "./playlist.types";


function spotifyApi(endpoint: 'track', id: string): Promise<ITrack>
function spotifyApi(endpoint: 'playlist', id: string): Promise<IPlayList>
function spotifyApi(endpoint: 'artist', id: string): Promise<IArtist>
function spotifyApi(endpoint: string, id: string): Promise<unknown> {
    return fetch(``).then(res => res.json)
}

const track = await spotifyApi('track', '123')