const mongoose = require('mongoose')
const {Profile} = require('./ProfileModel')

const DB_URL_MONGO = 'mongodb+srv://Andres:<andres123>@clusterbackendprofiles-i7z5c.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(DB_URL_MONGO,{ useNewUrlParser: true },(err)=>{
  if (!err) console.log('Conexión exitosa');
});

module.exports = {
  Profile
}