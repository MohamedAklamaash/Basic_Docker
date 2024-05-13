const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    return res.send(`<h1>Hello,I am Aklamaash</h1>`)
})

app.listen(5001,()=>{
    console.log("Server is running on port 5001");
})