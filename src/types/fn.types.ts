
type TPlayFunction = (track: string) => void;
type TVolumeFunction = (level: number) => void;

const play: TPlayFunction = (track) => {
    console.log(`Playing track: ${track}`)
}

function setVolume(level: number): void {
    if (level < 0 || level > 100) {
        throw new Error('Volume level  must be between 0 and 100')

    }
    console.log(`Setting volume to: ${level}`)
}