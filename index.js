// import express into our file
const express = require('express')

//Create a new express application
const app = express()

// define port our server will run on
const port = 3000

//allow static asset in public folder
app.use(express.static('public'))

//define our server routes
app.get('/', (req, res)=>{
    res.send("Server is operational")
})

app.get('/message', (req, res)=>{
    //do something when the server processes this request
    
    //send back a response to the client
    res.send("Server is operational")
})

// rum our server to listen at the port we defined

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})