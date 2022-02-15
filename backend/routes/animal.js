import express from "express";
import animal from "../controllers/animal.js";

const router = express.Router();

router.post("/registerAnimal", animal.registerAnimal);

export default router;