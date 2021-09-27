const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    _id:Number,
    nick:String,
    password:String,
    rol:Number,
    user:Number,
    email:Number
},{
    versionKey: false
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
    
