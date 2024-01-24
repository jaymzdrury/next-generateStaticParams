import { NextResponse } from "next/server"
import { Data } from "../data/[slug]/page"

export async function GET(): Promise<NextResponse<Data[]>> {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    if(!res.ok) throw new Error()

    return NextResponse.json(data)
    
}