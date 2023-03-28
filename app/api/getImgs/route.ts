export async function GET(request: Request) {


    const BASE_URL = process.env.NODE_ENV === 'production'
        ? process.env.GET_IMGS_URL!
        : 'https://ai-dalle-image-app.azurewebsites.net/api/getimgs'

    const response = await fetch(
        BASE_URL,
        {
            cache: "no-store",
        }
    );

    const blob = await response.blob();
    const textData = await blob.text();

    const data = JSON.parse(textData);

    return new Response(JSON.stringify(data), {
        status: 200,
    });
}
