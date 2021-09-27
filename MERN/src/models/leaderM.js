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
    movil:{type:Number, required:true},
    email:String,
    proyect:[{type:Number}],
    time:[Number]
},{
    versionKey: false
})

const leader = mongoose.model('Leader', LeaderSchema);

module.exports = leader;
