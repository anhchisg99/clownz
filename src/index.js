import 'dotenv/config'

import express from 'express'
const app = express()
const PORT  = 3002
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import createError from 'http-errors'
import route from './api/routes/index.js'

// mongoose.connect('mongodb://localhost:27017/test')
mongoose.connect(process.env.MONGO_URI)
    
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }))
// parse application/json
app.use(bodyParser.json())




app.get('/',(req,res)=>{
    res.send('success !!!')
})

// router
route(app)

app.use((req,res,next)=>{
    next(createError(404,"NOT FOUND"))
})
app.use((err,req,res,next)=>{
res.status(err.status || 500)
    res.json({
        status: err.status || 500,
        message: err.message
    })
})


app.listen(PORT,()=>{console.log(`listen in ${PORT}`)})