import React from "react"

interface MiniPlayerProps {
    src: string
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ( {src} ) => {
    return (
        <div className="relative border rounded-md overflow-hidden w-[320] h-[180]">
        <video
            controls
            src={src}
            className="w-full h-full object-cover"
        ></video>
        </div>
    )
}