import express from 'express';
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import galleryRoutes from './routes/images.js';
import bodyParser from 'body-parser';
import cloudinary from 'cloudinary';

// const cloudinary = require('cloudinary').v2;

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
mongoose.connect("mongodb+srv://ayacheyassine2000:CwMhkRmGplPQHtCU@cluster0.0qj6qfr.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

// Use the images route
// app.use(imagesRoute);


// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Express route to handle image upload


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
