"use client";

import React, { useRef } from "react"

interface MiniPlayerProps {
    src: string
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ( {src} ) => {

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

    return (
        <div className="relative border rounded-md overflow-hidden w-[320] h-[180]">
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