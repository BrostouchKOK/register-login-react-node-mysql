import express from "express";
import { checkToken, login, register, verifyToken } from "../controllers/authController.js";

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.get('/home',verifyToken,checkToken)

export default router;