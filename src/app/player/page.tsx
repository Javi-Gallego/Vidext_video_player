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

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <main className="flex min-h-full flex-col items-center justify-center bg-[#fafaf9] text-white">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 py-4">
            <p>Loading...</p>
          </div>
        </main>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <NavBar />
        <main className="flex min-h-full flex-col items-center justify-center bg-[#fafaf9] text-white">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 py-4">
            <p>Error loading videos: {error.message}</p>
          </div>
        </main>
      </div>
    )
  }
  
  return (
    <div>
      <NavBar />
        <main className="flex min-h-full flex-col items-center justify-center bg-[#fafaf9] text-white">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 py-4">
            <ClientComponent videos={dbvideos ?? []}/>
          </div>
        </main>     
    </div>
  )
}

export default PlayerPage