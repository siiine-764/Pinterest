// auth.js (backend/routes)
import express from 'express';
import { registerUser, loginUser, getUser  } from "../controllers/authController.js";
const router = express.Router();

// Register route
router.post('/register',  registerUser);
router.post('/login',  loginUser);

// GET user by ID
router.get('/user/:userId', getUser);
  export default router;
