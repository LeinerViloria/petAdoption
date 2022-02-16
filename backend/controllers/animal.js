import animal from "../models/animal.js";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerAnimal = async (req,res)=>{

    if(!req.body.name || !req.body.age|| !req.body.gender || !req.body.young || !req.body.weight || !req.body.height || !req.body.health || !req.body.race || !req.body.type || !req.body.identifier )

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
    identifier: req.body.identifier,
    dbStatus:true,
    });

    let result = await schemaAnimal.save();

    if (!result) return res.status(500).send({message: "Error to register animal"});

    try {
        return res.status(200).json({
            token : jwt.sign({
                _id:result._id,
                name:result.name,
                race:result.race,
                type:result.type,
                identifier:result.identifier,
                iat: moment().unix(),
        },
        process.env.SK_JWT
        ),
    });
    } catch (e) {
         res.status(500).send({message: "Register error:", e});
    }
};

export default {registerAnimal};