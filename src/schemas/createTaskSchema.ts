import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }).trim(),
  description: z.string().trim().optional()
});