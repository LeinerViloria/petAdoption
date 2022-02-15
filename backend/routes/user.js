import userController from "../controllers/user.js";
import express from "express";

const router = express.Router();

router.post("/registerUser", userController.registerUser);


export default router;
