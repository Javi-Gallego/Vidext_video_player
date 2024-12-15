"use client"

import React, { useRef } from "react"
import { MiniPlayerProps } from "@/interfaces/interface"

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

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
        if (videoRef.current) {
          videoRef.current.currentTime = 0
        }
        onClick(src)
    }

    return (
        <div className="relative border rounded-md overflow-hidden aspect-w-16 aspect-h-9 cursor-pointer w-full" onClick={handleClick}>
            <video
                ref = {videoRef}
                src = {src}
                className="w-full object-cover"
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
                muted
            ></video>
        </div>
    )
}