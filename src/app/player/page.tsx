"use client"

import { NavBar } from '../_components/navbar'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import ClientComponent from '../_components/clientcomponents'
import { Video } from '@/interfaces/interface'
import { api } from '@/trpc/react'

const PlayerPage = () => {
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn, router])

  const { data: dbvideos, isLoading, error} = api.video.getAllVideos.useQuery<Video[]>()

  return (
    <div>
      <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-center bg-[#fafaf9] text-white">
              <div className="container flex flex-col items-center justify-center gap-6 px-4 py-10">
                <h1 className="text-2xl font-bold tracking-tight sm:text-[3rem] text-black">
                  Vidext <span className="bg-[#c2f902] text-black rounded-full px-10">Player</span>
                </h1>
                <ClientComponent videos={dbvideos ?? []}/>
              </div>
            </main>     
    </div>
  )
}

export default PlayerPage