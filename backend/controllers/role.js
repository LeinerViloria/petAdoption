//Aqui va el rol
import role from '../models/role.js';

const register = async (req, res) =>{
    if(!req.body.name || !req.body.description) return res.status(400).send({message:"Incomplete data"});

    const existingRole = await role.findOne({name:req.body.name});

    if(existingRole) return res.status(400).send({message:"This role is already registered"});

    const schema = new role({
        name:req.body.name,
        description:req.body.description
    });

    const result = await schema.save();

    if(!result) return res.status(500).send({message:"Internal error"});

    res.status(200).send({message:result});
}

export default {register};