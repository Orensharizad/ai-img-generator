const { Configuration, OpenAIApi } = require('openai')


const confing = new Configuration({
    organization: process.env.OPEN_AI_ID,
    apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(confing)

module.exports = openai