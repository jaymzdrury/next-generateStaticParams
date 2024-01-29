import { NextResponse } from "next/server";
import { notFound } from "next/navigation";
import { Data } from "@/types";

type Params = {
    params: {
        id: string
    }
}

export async function GET(request: Request, {params}: Params): Promise<NextResponse<Data>> {

    if (Number(params.id) > 10) notFound()
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)

    if(!res.ok) throw new Error()

    const data = await res.json()
    return NextResponse.json(data)
    
}