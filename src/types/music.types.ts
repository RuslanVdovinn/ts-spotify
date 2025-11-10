export type TId = string
export type TImageUrl = string

export type TStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

type TBase = {
    id: TId
    createdAt: string
    updatedAt: string
}

export type TArtist = {
    name: string
    image: TImageUrl
    isVerified: boolean
} & TBase

export interface IBase {
    id: TId
    createdAt: string
    updatedAt: string
}

export interface IArtist extends IBase {
    name: string
    image: TImageUrl 
    isVerified: boolean
}

export interface ITrack extends IBase {
    artist: IArtist
    title: string
    duration: number
    isPublished: boolean
    audioUrl: string
}