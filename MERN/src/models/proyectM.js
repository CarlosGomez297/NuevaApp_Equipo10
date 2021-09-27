const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProyectSchema = new Schema({
    _id:Number,
    name:String,
    description: String,
    objectives:String,
    budget:Number,
    Dinit:Date,
    Dfin:Date,
    leaders:[Number],
    students:[Number],
    active:Boolean,
    status:String,
    Advances:[String]
},{
    versionKey: false
})

const Proyect = mongoose.model('Proyect', ProyectSchema);

module.exports = Proyect;

