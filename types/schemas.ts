import { z } from "zod";

export const Id = z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);

export const DataSchema = z.object({ id: Id, name: z.string().min(1) });

export const ParamsSchema = z.object({
  params: z.object({
    slug: Id,
  }),
});
