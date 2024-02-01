import express from 'express';
import { getImages , postImage } from "../controllers/image.js";

const router = express.Router();


// Use the getImages function in a route
router.get("/images", getImages);
router.post('/upload', postImage);

export default router;
