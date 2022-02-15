import animal from "../models/animal.js";
import user from "../models/user.js";
import adoption from "../models/adoption.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerAdoption = async (req, res) => {
  if (!req.body.animalId || !req.body.ownerId || !req.body.employedId)
    return res.status(400).send({ message: "Incomplete data" });

  const existingAnimal = await animal.findOne({
    identifier: req.body.animalId,
  });
  if (!existingAnimal)
    return res.status(400).send({ message: "the animal not existing" });
  const existingOwner = await user.findOne({ document: req.body.ownerId });
  if (!existingOwner)
    return res.status(400).send({ message: "the owner not existing" });
  const existingEmployed = await user.findOne({
    document: req.body.employedId,
  });
  if (!existingEmployed)
    return res.status(400).send({ message: "the employed not existing" });
  if (
    existingAnimal.dbStatus == false ||
    existingOwner.dbStatus == false ||
    existingEmployed.dbStatus == false
  ) {
    return res
      .status(400)
      .send({ message: "the adoption cannot be carried out" });
  }
  const adoptionSchema = new adoption({
    animalId: existingAnimal._id,
    ownerId: existingOwner._id,
    employedId: existingEmployed._id,
  });
  const result =  await adoptionSchema.save();
  if(!result) return res.status(500).send({message:"Failed to register adoption"})
  res.status(200).send({result});
};
export default {registerAdoption};
