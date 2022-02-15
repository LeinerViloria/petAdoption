import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    document:String,
    name:String,
    roleId:{type:mongoose.Schema.ObjectId, ref:"roles"},
    direction:String,
    age:Number,
    tel:String,
    email:String,
    pass:String,
    dbStatus:Boolean,
    registerDate:{type:Date, default:Date.now}
});

const user = mongoose.model("users", userSchema);

export default user;