export async function GET(request: Request) {


    const BASE_URL = process.env.NODE_ENV === 'production'
        ? process.env.GET_SUGGESTION!
        : 'http://localhost:7071/api/getChatGPTSuggestion'


    const res = await fetch(BASE_URL, {
        cache: 'no-store'
    })


    const textData = await res.text()


    return new Response(JSON.stringify(textData.trim()), { status: 200 })
}
