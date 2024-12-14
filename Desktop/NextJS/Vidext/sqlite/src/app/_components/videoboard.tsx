"use client";

import { use, useEffect, useState } from "react";
import { MiniPlayer } from "./miniplayer";
import { Video, VideoBoardProps } from "@/interfaces/interface";

export const VideoBoard: React.FC<VideoBoardProps> = ({ videos, onClick }) => {
  const theVideo = (src: string) => {
    onClick(src);
  };
  const [currentVideo, setCurrentVideo] = useState<string>("videos/Drone.mp4");
  useEffect (() => {
    console.log("Estoy clicando: ", currentVideo);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-black w-full">
      {videos?.map((video: Video) => (
        <div key={video.id} className="grid justify-center intems-center rounded-md p-1">
          <h2 className="text-lg font-bold text-center w-100">{video.name}</h2>
          <MiniPlayer src={video.path} onClick={theVideo} />
          <div className="flex justify-between">
            <p className="text-center w-40">Views: {video.views}</p>
            <p className="text-center w-40"> Likes: {video.likes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};