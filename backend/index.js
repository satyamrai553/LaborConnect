import express from 'express';


const app = express();


app.get('/', (req,res)=>{
    res.send("Backend is running")
    console.log("welcome to backend of laboutConnect");
    
})


app.listen(4000, ()=>{
    console.log("server is listening on port 4000");
    
})