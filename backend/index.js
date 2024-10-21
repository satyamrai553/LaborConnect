import dotenv from 'dotenv';
import dbConnect from './src/db/index.js';
import app from './app.js'
import cors from "cors"


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


dotenv.config({
    path: './.env'
})


dbConnect().then(()=>{
    app.get('/', (req, res)=>{
        res.send("Welcome to labourConnect backend!");
    })

    app.listen(`${process.env.PORT}`, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
        console.log("DB connection error: ",err)
    })