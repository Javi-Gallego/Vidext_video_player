import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const videoRouter = createTRPCRouter({
  createVideo: publicProcedure
    .input(z.object({ name: z.string().min(1), path: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.video.create({
        data: {
          name: input.name,
          path: input.path,
        },
      })
    }),

  getAllVideos: publicProcedure.query(async ({ ctx }) => {
    const videos = await ctx.db.video.findMany()
    return videos
  }),

  updateVideo: publicProcedure
    .input(z.object({ id: z.number(), views: z.number().optional(), likes: z.number().optional() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.video.update({
        where: { id: input.id },
        data: {
          views: input.views,
          likes: input.likes,
        },
      })
    }),

  incrementViews: publicProcedure
    .input(z.object({ path: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const video = await ctx.db.video.findFirst({
        where: { path: input.path },
      })

      if (!video) {
        throw new Error("Video not found");
      }

      return ctx.db.video.update({
        where: { id: video.id },
        data: {
          views: {
            increment: 1,
          },
        },
      })
    }),

})