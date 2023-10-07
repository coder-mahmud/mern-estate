import express from 'express'
import { userGeneral } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', userGeneral )

export default router;