// authController.js (backend/controllers)
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export const registerUser = async (req, res) => {
  const { email, password, username, profileimage } = req.body;

  
  try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
          return res.status(400).json({ message: 'User already exists' });
      }
      // Create a new user
      user = new User({ email, password, username, profileimage });

      console.log(user);
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the user to the database
      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server Error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Invalid credentials user' });
      }

      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(400).json({ message: 'Invalid credentials password' });
      }

      // Handle successful login
      res.json({ message: 'Login successful' });
  } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Server Error' });
  }
};

export const getUser = async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Validate if userId is a valid MongoDB ObjectId (optional)
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
  
      // Find the user by ID in the database
      const user = await User.findById(userId);
      // console.log(user);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user data
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  };
