const express = require('express')

const app=express()

const PORT=3002;

app.listen(PORT, function(){
    console.log("sucessfully running at http://localhost:"+PORT)
})