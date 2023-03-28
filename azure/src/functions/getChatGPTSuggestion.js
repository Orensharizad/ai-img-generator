const { app } = require('@azure/functions');
const openai = require('../../lib/openai')

app.http('getChatGPTSuggestion', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const res = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: 'Write a random text prompt for DALL.E to generate an image,this prompt will be shown to the user,include details such as the genre and what type of panting it should be,options can uncludes oil painting,watercolor,photo-realistic,4k,abstract,modren,black and white etc.Do not wrap the answer in quotes.',
            max_tokens: 100,
            temperature: 0.8,

        })

        context.log(`Http function processed request for url "${request.url}"`);

        const resText = res.data.choices[0].text



        return { body: resText };
    }
});
