const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require("body-parser")
const cors = require('cors')
const openai = require('./openaitext')

dotenv.config()
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


///openAi chat api
app.post('/text/',async(req,res)=>{
    const {message} = req.body
    // console.log(message)
    try{
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `${message}`,
          max_tokens: 500,
          temperature: 0.5,
        })
        res.json({
            message: response.data.choices[0].text 
        })
    }
    catch(err){
        console.error(err)
    }
})

app.post('/image/',async(req,res)=>{
    const { message,size } = req.body
    try {
        const response = await openai.createImage({
            prompt:`${message}`,
            n: 1,
            size: `${size}`,
        })
        res.json({image_url : response.data.data[0].url})
    } catch (err) {
        console.error(err)
    }
})


app.listen(5400,()=>{
    console.log(`http://localhost:5400`)
})