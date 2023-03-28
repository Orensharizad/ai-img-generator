import { NextResponse } from "next/server"


export async function POST(request: Request) {

    const BASE_URL = process.env.NODE_ENV === 'production'
        ? process.env.GENERATE_URL!
        : 'https://ai-dalle-image-app.azurewebsites.net/api/generateimg'



    const data = await request.json()
    const prompt = data.prompt
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    })


    const textData = await res.text()
    // const textData = 'hello world'


    return NextResponse.json(textData)
}
