import adoption from "../controllers/adoption.js";
import express from "express";
const router = express.Router();

router.post("/registerAdoption",adoption.registerAdoption);

export default router;

