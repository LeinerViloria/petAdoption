import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db/db.js';
import userRoute from "./routes/user.js";

dotenv.config();

const APP = express();
APP.use(express.json());
APP.use(cors());
APP.use("/api/user", userRoute);

APP.listen(process.env.PORT, ()=>console.log("Running in the port: ", process.env.PORT));

db.dbConnection();