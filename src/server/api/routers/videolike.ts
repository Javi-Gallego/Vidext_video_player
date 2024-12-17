import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const videoLikeRouter = createTRPCRouter({
  addLike: publicProcedure
    .input(z.object({ userId: z.number(), videoId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.videoLikes.create({
        data: {
          userId: input.userId,
          videoId: input.videoId,
        },
      })
    }),

    removeLike: publicProcedure
    .input(z.object({ userId: z.number(), videoId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const like = await ctx.db.videoLikes.findFirst({
        where: {
          userId: input.userId,
          videoId: input.videoId,
        },
      })

      if (like) {
        await ctx.db.videoLikes.delete({
          where: {
            userId_videoId: {
              userId: input.userId,
              videoId: input.videoId,
            },
          },
        })
        return { success: true }
      } else {
        return { success: false, message: "Like not found" }
      }
    }),  

  getAllLikes: publicProcedure.query(async ({ ctx }) => {
    const likes = await ctx.db.videoLikes.findMany()
    return likes
  }),

  getLikesByVideo: publicProcedure.query(async ({ ctx }) => {
    const likeCounts = await ctx.db.videoLikes.groupBy({
      by: ['videoId'],
      _count: {
        videoId: true,
      },
    })
    return likeCounts.map(likeCount => ({
      videoId: likeCount.videoId,
      likeCount: likeCount._count.videoId,
    }))
  }),

  getLikesByUser: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ ctx, input }) => {
      const likes = await ctx.db.videoLikes.findMany({
        where: { userId: input.userId },
      })
      return likes
    }),
})