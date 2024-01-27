// auth.js (backend/routes)
import express from 'express';
import { registerUser, loginUser  } from "../controllers/authController.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();
// const User = require('../models/User');

// Register route
router.post('/register',  registerUser);
router.post('/login',  loginUser);
  

// // Login route
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       // Call the loginUser function from your controller
//       const token = await loginUser(username, password);
//       res.status(200).json({ token });
//     } catch (error) {
//       console.error('Error logging in:', error);
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   });

  export default router;
