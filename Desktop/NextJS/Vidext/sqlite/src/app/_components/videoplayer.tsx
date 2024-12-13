import React from "react"

export const VideoPlayer: React.FC = () => {
    return (
        <div className="relative border rounded-md overflow-hidden w-[720] h-[405]">
        <video
            controls
            src="/videos/HUD.mp4"
        ></video>
        </div>
    )
}