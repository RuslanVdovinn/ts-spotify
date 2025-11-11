import type { IBase, ITrack, TId } from "./music.types";
import type { IPlayList } from "./playlist.types";


export function updateTrack(
    trackId: TId,
    data: Partial<Omit<ITrack, keyof IBase>>
) : void {
    console.log(`Updating track ${trackId} with data:`, data);
}

interface IUser {
    name?: string
    age?: number
    city?: string
}

export type TUserProfile = Required<IUser>;
export type TMainUserProfile = Pick<IUser, "name" | "age">;

export type TUserDictionary = Record<string, string>;
export const userDict: TUserDictionary = {
    man: "John",
    woman: "Jane",
    child: "Tom"
};

type LockPlaylist = Readonly<IPlayList>;

type TUpdateTrackResponse = ReturnType<typeof updateTrack>;
type TUpdateTrackParams = Parameters<typeof updateTrack>;