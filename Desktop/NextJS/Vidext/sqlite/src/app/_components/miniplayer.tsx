"use client";

import React, { useRef } from "react"

interface MiniPlayerProps {
    src: string
    onClick: (src: string) => void
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ( {src, onClick} ) => {

    const videoRef = React.useRef<HTMLVideoElement>(null)

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
    }

    const handleClick = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0
        }
        onClick(src)
      };

    return (
        <div className="relative border rounded-md overflow-hidden w-[320] h-[180] cursor-pointer" onClick={handleClick}>
            <video
                ref = {videoRef}
                src = {src}
                className="w-full h-full object-cover"
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
                muted
            ></video>
        </div>
    )
}