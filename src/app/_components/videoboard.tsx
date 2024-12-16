"use client"

import { MiniPlayer } from "./miniplayer"
import { Video, VideoBoardProps } from "@/interfaces/interface"
import { LikeIcon } from "./likeicon"

export const VideoBoard: React.FC<VideoBoardProps> = ({ videos, onClick }) => {

  const theVideo = (src: string) => {
    console.log("VideoBoard click")
    onClick(src)
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-black w-full">
      {videos?.map((video: Video) => (
        <div key={video.id} className="grid justify-center items-center rounded-md p-1">
          <h2 className="text-lg font-bold text-center w-100">{video.name}</h2>
          <MiniPlayer src={video.path} onClick={theVideo} />
          <div className="flex justify-between align-center items-center">
            <div className="text-center w-40">Views: {video.views}</div>
            <div className="text-center w-40 flex justify-center align-center items-center">
              <div className="cursor-pointer"><LikeIcon color1="red" color2="black"/></div> 
              {video.likes}</div>
          </div>
        </div>
      ))}
    </div>
  )
}