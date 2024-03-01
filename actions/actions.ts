import { get, getAll } from "@/lib/db";
import { Schema } from "@/lib/schema";

export async function getData(id: string) {
  const { success } = Schema.safeParse({ id });

  if (!success) return { error: "invalid" };

  const { error, data } = await get(id);

  if (error) throw new Error(error);

  return data;
}

export async function getAllData() {
  const { error, data } = await getAll();

  if (error) throw new Error(error);

  return data;
}
