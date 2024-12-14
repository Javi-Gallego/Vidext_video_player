"use client"
import React from "react"

interface VideoPlayerProps {
    src: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    return (
        <div className="flex justify-center items-center aspect-w-16 aspect-h-9 p-4">
            <div className="relative rounded-md overflow-hidden cursor-pointer max-w-[720px] max-h-[405px] bg-black">
                <video controls src={src} autoPlay className="w-full h-full"></video>
            </div>
        </div>
    )
}