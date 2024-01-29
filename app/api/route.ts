import { NextResponse } from "next/server"

export async function GET(): Promise<NextResponse<Data[]>> {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    if(!res.ok) throw new Error()

    return NextResponse.json(data)
    
}