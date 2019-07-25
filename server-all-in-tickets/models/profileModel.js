const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    nombre : String,
    apellido : String,
    cedula : String,
    correo : String,
    contraseña : String,
    direccion : String,
    telefono : String
}, {timestamps:true});

const Profile = mongoose.model('Profile',profileSchema);

module.exports = {Profile}