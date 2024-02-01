import express from 'express';
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import galleryRoutes from './routes/images.js';
import bodyParser from 'body-parser';
import cloudinary from 'cloudinary';
import { config } from 'dotenv';
config();
// require('dotenv').config();

const app = express();
const port = 3001;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});


// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gallery', galleryRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
