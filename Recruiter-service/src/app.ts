import express from 'express'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))

export {
    app
}