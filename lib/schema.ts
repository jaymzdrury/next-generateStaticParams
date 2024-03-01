import { z } from "zod";

export const Schema = z.object({
  id: z.string().min(1, { message: "id is required" }),
});
