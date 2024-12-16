import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(z.object({ name: z.string().min(1), password: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          name: input.name,
          password: input.password,
        },
      })
    }),

  getAllUsers: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany()
    return users;
  }),
})