"use client";

import React, { useEffect, useState } from "react";
import { VideoPlayer } from "@/app/_components/videoplayer";
import { MiniPlayer } from "@/app/_components/miniplayer";
import { VideoBoard } from "@/app/_components/VideoBoard";

export function ClientComponent() {
  const [currentVideo, setCurrentVideo] = useState<string>("videos/Drone.mp4");

  return (
    <div>
      <VideoPlayer src={currentVideo} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <MiniPlayer src="/videos/Drone.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/HUD.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/Wolf.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/Genesis.mp4" onClick={setCurrentVideo} />
        <MiniPlayer src="/videos/Rain.mp4" onClick={setCurrentVideo} />
        <VideoBoard />
      </div>
    </div>
  );
}

export default ClientComponent;