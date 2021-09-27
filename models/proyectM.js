const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
    _id:Number,
    name:{ type: String, required: true },
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

const project = mongoose.model('Proyect', ProjectSchema);

module.exports = project;

