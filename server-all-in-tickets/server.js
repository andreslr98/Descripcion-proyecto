const express = require('express');
const bodyParser = require('body-parser')

//app
const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//routes
const profileApiRouter = require('./routes/profileApi')



//routes
app.use('/profileApi', profileApiRouter)

const server = app.listen(5800, ()=>{
    console.log(`Listening http://localhost:${server.address().port}`)
})