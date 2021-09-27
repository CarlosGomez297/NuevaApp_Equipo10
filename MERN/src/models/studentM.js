const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    _id:Number,
    name:{
        fName:{type:String, required:true},
        sName:String,
        fLastName:String,
        sLastName:String
    },
    career:String,
    movil:{type:Number, required:true},
    inProyect:[Date],
    proyect:[{type:Number}]
},{
    versionKey: false
})

const student = mongoose.model('Student', TaskSchema);

module.exports = student;