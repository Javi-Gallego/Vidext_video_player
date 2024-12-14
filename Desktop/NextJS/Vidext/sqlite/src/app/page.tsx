import Link from "next/link";

import ServerComponent from "@/app/_components/servercomponents";
import ClientComponent from "@/app/_components/clientcomponents";
import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import { Video } from "@/interfaces/interface";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const dbvideos: Video[] = await api.video.getAllVideos();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <ServerComponent>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fafaf9] text-white">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-10">
          <h1 className="text-2xl font-bold tracking-tight sm:text-[3rem] text-black">
            Vidext <span className="bg-[#c2f902] text-black rounded-full px-10">Player</span>
          </h1>
          <ClientComponent videos={dbvideos}/>
        </div>
      </main>
      </ServerComponent>
      
      {/*
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#fafaf9] text-white">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-10">
          <h1 className="text-2xl font-bold tracking-tight sm:text-[3rem] text-black">
            Vidext <span className="bg-[#c2f902] text-black rounded-full px-10">Player</span>
          </h1>

          <VideoPlayer src={currentVideo}/>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <MiniPlayer src="/videos/Drone.mp4" onClick={setCurrentVideo}/>
            <MiniPlayer src="/videos/HUD.mp4" onClick={setCurrentVideo}/>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <LatestPost />         

        </div>
      </main>

      */}
    </HydrateClient>
  );
}
