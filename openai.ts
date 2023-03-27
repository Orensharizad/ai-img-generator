import { Configuration, OpenAIApi } from "openai";


const confing = new Configuration({
    organization: process.env.OPEN_AI_ID,
    apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(confing)

export default openai