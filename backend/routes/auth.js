// auth.js (backend/routes)
import express from 'express';
import { registerUser, loginUser, getUser  } from "../controllers/authController.js";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
const router = express.Router();
// const User = require('../models/User');

// Register route
router.post('/register',  registerUser);
router.post('/login',  loginUser);

// GET user by ID
router.get('/user/:userId', getUser);
  export default router;
