"use client"

import React, { useEffect, useState } from "react"
import { VideoPlayer } from "@/app/_components/videoplayer"
import { VideoBoard } from "./videoboard"
import { ClientComponentProps } from "@/interfaces/interface"
import { api } from "@/trpc/react"
import { Video } from "@/interfaces/interface"

export function ClientComponent( {videos}: ClientComponentProps ) {
  const [currentVideo, setCurrentVideo] = useState<string>("videos/Intro1.mp4")
  const [arrayVideos, setArrayVideos] = useState<Video[]>(videos)

  const { data: fetchedVideos, refetch } = api.video.getAllVideos.useQuery()
  const updateViews = api.video.incrementViews.useMutation({
    onSuccess: () => {
      refetch()
    }
  })
  
  useEffect (() => {
      if(fetchedVideos){
        setArrayVideos(fetchedVideos)
      }
  }, [fetchedVideos])

  const handleClick = (src: string) => {
    console.log("ClientComponent click")
    updateViews.mutateAsync({path: src})
    setCurrentVideo(src)
  }

  return (
    <div className="w-full">
      <VideoPlayer src={currentVideo} />
      <VideoBoard videos={arrayVideos} onClick={handleClick}/>
    </div>
  )
}

export default ClientComponent