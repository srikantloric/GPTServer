const express = require('express')
const bodyParser = require('body-parser')




const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-vGEs8FxIE2GPGM3YzBNHoUma",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(express.json())
const port = 3000;

app.post('/', async (req, res) => {

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`${req.body.command}`,
        max_tokens: 100,
        temperature: 0.5,
        // top_p: 1,
        // n: 1,
        // stream: false,
        // logprobs: null,
        // stop: "\n"
    });
    console.log(req.body)
    console.log(response.data.choices[0].text)

    res.json({
        title: response.data.choices[0].text
    })
})

app.listen(port, () => {
    console.log("Chat GPT listening on port 3000");
    
})



// async function callApi() {
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "How can i control my anger",
//         max_tokens: 7,
//         temperature: 0,
       
       
//     });
//     console.log(response.data.choices[0])
// }

// callApi()




// const response = await openai.listEngines();
