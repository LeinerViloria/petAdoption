import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db/db.js';

dotenv.config();

const APP = express();
APP.use(express.json());
APP.use(cors());

APP.listen(process.env.PORT, ()=>console.log("Running in the port: ", process.env.PORT));

db.dbConnection();