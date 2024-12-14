"use client";

import React, { useEffect, useState } from "react";
import { VideoPlayer } from "@/app/_components/videoplayer";
import { MiniPlayer } from "@/app/_components/miniplayer";
import { VideoBoard } from "./videoboard";
import { ClientComponentProps } from "@/interfaces/interface";

export function ClientComponent( {videos}: ClientComponentProps ) {
  const [currentVideo, setCurrentVideo] = useState<string>("videos/Drone.mp4");
  
  useEffect (() => {
    console.log("Video actual: ", currentVideo);
  }, [currentVideo]);

  return (
    <div className="w-full">
      <VideoPlayer src={currentVideo} />
      {/*<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <MiniPlayer src="/videos/Drone.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/HUD.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/Wolf.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/Genesis.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/Rain.mp4" onClick={setCurrentVideo} />
      </div>*/}
      <VideoBoard videos={videos} onClick={setCurrentVideo}/>
    </div>
  );
}

export default ClientComponent;