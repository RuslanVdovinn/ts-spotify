interface Props {
    onSeek: (time: number) => void
}

export function PlayerControls({ onSeek }: Props) {
    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const percentage = clickPosition / rect.width;
        onSeek(percentage);
    };

    return <div className="controls">
        <div
        className="progress-bar"
        onClick={handleProgressClick}
        />
    </div>
}
