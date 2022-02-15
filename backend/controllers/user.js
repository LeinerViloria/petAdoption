import userModel from "../models/user.js";
import roleModel from "../models/role.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

const registerUser = async (req, res) => {
  if (
    !req.body.document ||
    !req.body.name ||
    !req.body.direction ||
    !req.body.age ||
    !req.body.tel ||
    !req.body.email ||
    !req.body.pass
  )
    return res.status(400).send({ message: "Incomplete data" });

  const existingUser = await userModel.findOne({ email: req.body.email });

  if (existingUser)
    return res.status(400).send({ message: "The user is already registered" });

  const roleID = await roleModel.findOne({ name: "user" });

  if (!roleID) return res.status(500).send({ message: "No role was asigned" });

  const passHash = await bcrypt.hash(req.body.pass, 10);

  let schema = new userModel({
    document: req.body.document,
    name: req.body.name,
    roleId: roleID._id,
    direction: req.body.direction,
    age: req.body.age,
    tel: req.body.tel,
    email: req.body.email,
    pass: passHash,
    dbStatus: true,
  });

  let result = await schema.save();

  if (!result)
    return res.status(500).send({ message: "failed to register user" });

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          email: result.email,
          roleId: result.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (e) {
    res.status(500).send({ message: "Register error" });
  }
};

export default { registerUser };
