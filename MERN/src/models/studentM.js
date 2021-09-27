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
    movil:Number,
    inProyect:[Date],
    proyect:[{type:Number}]
},{
    versionKey: false
})

const Student = mongoose.model('Student', TaskSchema);

module.exports = Student;