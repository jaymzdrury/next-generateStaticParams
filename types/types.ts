import { z } from "zod";
import { DataSchema, Id, ParamsSchema } from "./schemas";

export type IdType = z.infer<typeof Id>;

export type Data = z.infer<typeof DataSchema>;

export type Params = z.infer<typeof ParamsSchema>;
