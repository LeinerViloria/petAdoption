import mongoose from 'mongoose';

//Young -> cria de animal
const animalSchema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    young:Boolean,
    weight:Number,
    height:Number,
    health:String,
    race:String,
    type:String,
    identifier:Number,
    dbStatus:Boolean,
    registerDate:{type:Date, default:Date.now}
});

const animal = mongoose.model("animals", animalSchema);

export default animal;