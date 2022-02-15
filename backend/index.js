import express, { application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db/db.js';

import userRoute from "./routes/user.js";
import role from './routes/role.js';
import animal from './routes/animal.js';
import adoption from './routes/adoption.js';

dotenv.config();

const APP = express();
APP.use(express.json());
APP.use(cors());
APP.use("/api/user", userRoute);

APP.use("/api/role", role);
APP.use("/api/animal", animal);
APP.use("/api/adoption", adoption);


APP.listen(process.env.PORT, ()=>console.log("Running in the port: ", process.env.PORT));

db.dbConnection();