import { api } from "@/trpc/server";
import { Video } from "@/interfaces/interface";
import { VideoBoard } from "./videoboard";

export default async function ServerComponent({ children }: { children: React.ReactNode }) {
  const hello = await api.post.hello({ text: "from tRPC" });

  const videos: Video[] = await api.video.getAllVideos();
  
  return (
    <div>
      {<p>{hello.greeting}</p>}
      {children}
      <VideoBoard videos={videos}/>
    </div>
  );
}