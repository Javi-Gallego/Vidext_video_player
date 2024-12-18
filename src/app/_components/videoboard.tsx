"use client"

import { MiniPlayer } from "./miniplayer"
import { Video, VideoBoardProps, ArrayLikesProps, CountLikesProps } from "@/interfaces/interface"
import { LikeIcon } from "./likeicon"
import { api } from "@/trpc/react"
import { useEffect, useState } from "react"
import { get } from "http"

export const VideoBoard: React.FC<VideoBoardProps> = ({ videos, onClick }) => {
  const userId = localStorage.getItem('userId')
  const [arrayLikes, setArrayLikes] = useState<ArrayLikesProps[]>([])
  const [countLikes, setCountLikes] = useState<CountLikesProps[]>([])
  const getAllLikesQuery = api.videoLike.getLikesByUser.useQuery({userId: parseInt(userId || "0")})
  const getCountLikesQuery = api.videoLike.getLikesByVideo.useQuery()
  const addLikeMutation = api.videoLike.addLike.useMutation({
    onSuccess: () => {
      updateLikes()
    },
  })
  const removeLikeMutation = api.videoLike.removeLike.useMutation({
    onSuccess: () => {
      updateLikes()
    },
  })

  const theVideo = (src: string) => {
    console.log("VideoBoard click")
    onClick(src)
  }

  useEffect(() => {
    if (!userId || userId === '0') {
      console.error('User ID not found')
      return
    }
    updateLikes()
  }, [])

  const updateLikes = async () => {
    getAllLikesQuery.refetch().then((result) => {
      if (result.data) {
        setArrayLikes(result.data)
      }
    })
    getCountLikesQuery.refetch().then((result) => {
      if (result.data) {
        setCountLikes(result.data)
      }
    })
  }

  const addLike = async (videoId: number) => {
    if (!userId || userId === '0') {
      console.error('User ID not found')
      return
    }
  
    try {
      await addLikeMutation.mutateAsync({ userId: parseInt(userId), videoId: videoId })
    } catch (error) {
      console.error('Failed to add like:', error)
    }
  }

  const removeLike = async (videoId: number) => {
    if (!userId || userId === '0') {
      console.error('User ID not found')
      return
    }

    try {
      await removeLikeMutation.mutateAsync({ userId: parseInt(userId), videoId: videoId })
    } catch (error) {
      console.error('Failed to remove like:', error)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-black w-full">
      {videos?.map((video: Video) => {
        const isLiked = arrayLikes.some((like) => like.videoId === video.id)
        const numberOfLikes = countLikes.filter((like) => like.videoId === video.id)
        return (
        <div key={video.id} className="grid justify-center items-center rounded-md p-1">
          <h2 className="text-lg font-bold text-center w-100">{video.name}</h2>
          <MiniPlayer src={video.path} onClick={theVideo} />
          <div className="flex justify-between align-center items-center">
            <div className="text-center w-40">Views: {video.views}</div>
              <div className="text-center w-40 flex justify-center align-center items-center">
                <div className="cursor-pointer hover:scale-110" onClick={() => isLiked ? removeLike(video.id) : addLike(video.id)}>
                    <LikeIcon color1={isLiked ? "#c2f902" : "#fafaf9"} color2="black"/>
                </div> 
                  {numberOfLikes[0]?.likeCount || 0}
            </div>
          </div>
        </div>
        )
})}
    </div>
  )
}