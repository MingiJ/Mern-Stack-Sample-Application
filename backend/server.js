const express = require("express");
const dotenv = require("dotenv").config();
const router = require('./routes/routes')

const app = express();


const port = process.env.PORT || 5000

app.use('/',router)

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`)
})