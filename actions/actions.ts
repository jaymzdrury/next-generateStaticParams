import { Data } from "@/types"

export async function getData (id: string): Promise<Data> {

  if(!id) throw new Error()
  
  const res = await fetch(`${process.env.URL}/api/${id}`)
  const data = await res.json()

  if(!res.ok) throw new Error()

  return data
  
}