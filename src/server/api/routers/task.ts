import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { createTaskSchema } from "@/schemas/createTaskSchema";

export const taskRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createTaskSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.create({
        data: {
          title: input.title,
          description: input.description,
          completed: false,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  updateStatus: protectedProcedure
    .input(z.object({ id: z.number(), completed: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.update({
        where: {
          id: input.id,
        },
        data: {
          completed: input.completed,
        },
      });
    }),

  deleteTask: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.delete({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.task.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});
