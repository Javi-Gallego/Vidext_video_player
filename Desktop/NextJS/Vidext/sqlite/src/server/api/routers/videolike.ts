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

  getAllLikes: publicProcedure.query(async ({ ctx }) => {
    const likes = await ctx.db.videoLikes.findMany()
    return likes;
  }),

  getLikesByVideo: publicProcedure
    .input(z.object({ videoId: z.number() }))
    .query(async ({ ctx, input }) => {
      const likes = await ctx.db.videoLikes.findMany({
        where: { videoId: input.videoId },
      })
      return likes;
    }),

  getLikesByUser: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ ctx, input }) => {
      const likes = await ctx.db.videoLikes.findMany({
        where: { userId: input.userId },
      })
      return likes;
    }),
})