"use client"
import React from "react"

interface VideoPlayerProps {
    src: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    return (
        <div className="relative border rounded-md overflow-hidden w-[720] h-[405]">
        <video
            controls
            src={src}
            autoPlay
        ></video>
        </div>
    )
}