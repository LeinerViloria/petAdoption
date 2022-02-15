//Rol

import express from 'express';
import role from '../controllers/role.js';

const router = express.Router();

router.post("/registerRole", role.register);

export default router;