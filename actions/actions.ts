import { get, getAll } from "@/lib/db";
import { DataSchema } from "@/types/schemas";
import { Data, IdType } from "@/types/types";

export async function getData(id: IdType): Promise<Data> {
  const { success } = DataSchema.pick({ id: true }).safeParse({ id });

  if (!success) throw new Error("invalid");

  const { error, data } = await get(id);

  if (error) throw new Error(error);

  return data as Data;
}

export async function getAllData(): Promise<Data[]> {
  const { error, data } = await getAll();

  if (error) throw new Error(error);

  return data;
}
