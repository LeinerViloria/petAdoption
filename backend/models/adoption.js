import mongoose from 'mongoose';

const adoptionSchema = new mongoose.Schema({
    animalId:{type:mongoose.Schema.ObjectId, ref:"animals"},
    ownerId:{type:mongoose.Schema.ObjectId, ref:"users"},
    ownerId:{type:mongoose.Schema.ObjectId, ref:"users"},
    registerDate:{type:Date, default:Date.now}
});

const adoption = mongoose.model("adoptions", adoptionSchema);

export default adoption;