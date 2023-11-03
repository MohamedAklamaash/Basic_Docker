const express = require("express");
const app = express();
const env = require("dotenv").config();
app.get("/",(req,res)=>{
    res.status(201).json({msg:"Created a Docker Image Finally"});
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})