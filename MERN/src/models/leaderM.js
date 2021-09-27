const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeaderSchema = new Schema({
    _id:Number,
    name:{
        fName:{type:String, required:true},
        sName:String,
        fLastName:String,
        sLastName:String
    },
    movil:Number,
    email:String,
    proyect:[{type:Number}],
    time:[Number]
},{
    versionKey: false
})

const Leader = mongoose.model('Leader', LeaderSchema);

module.exports = Leader;
