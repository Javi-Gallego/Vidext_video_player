
import { MiniPlayer } from "./miniplayer";
import React from "react";
import { api } from "@/trpc/server";

export const VideoBoard: React.FC = () => {
  //const { data: videos, isLoading, error } = await api.video.getAllVideos();
  
  //const videos = await api.video.getAllVideos();
  //console.log("videos" + videos);


  {/*if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }*/}

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/*videos?.map((video: any) => (
        <div key={video.id} className="border rounded-md p-4">
          <h2 className="text-lg font-bold">{video.name}</h2>
          <video controls src={video.path} className="w-full h-auto"></video>
          <p>Views: {video.views}</p>
          <p>Likes: {video.likes}</p>
        </div>
      ))*/}
    </div>
  );
};