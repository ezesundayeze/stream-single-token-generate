const express = require('express')
const { StreamChat } = require("stream-chat")
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const client = new StreamChat(process.env.API_KEY, process.env.API_SECRET)
app.post("/get-token/", (req, res, next)=>{
    const token = client.createToken(req.body.username)
    res.json({token})
    next()
})

app.listen(8080, () => console.log('server started'))



