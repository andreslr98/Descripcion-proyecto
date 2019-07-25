const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');



const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());
//routes
const profileApiRouter = require('./routes/profileApi')




app.use('/profileApi', profileApiRouter)

const server = app.listen(5800, ()=>{
    console.log(`Listening http://localhost:${server.address().port}`)
})