import animal from "../models/animal.js";

const registerAnimal = async (req,res)=>{

    if(!req.body.name || !req.body.age|| !req.body.gender || !req.body.young || !req.body.weight || !req.body.height || !req.body.health || !req.body.race || !req.body.type)

    return res.status(400).send({message: "Imcomplete data"});

    let schemaAnimal = new animal({

    name:req.body.name,
    age:req.body.age,
    gender:req.body.gender,
    young:req.body.young,
    weight:req.body.weight,
    height:req.body.height,
    health:req.body.health,
    race:req.body.race,
    type:req.body.type,
    dbStatus:true,
    });

    let result = await schemaAnimal.save();

    if (!result) return res.status(500).send({message: "Error to register animal"});

    res.status(200).send({result});
};

export default {registerAnimal};