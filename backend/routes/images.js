import express from 'express';
import { getImages , postImages, getImage } from "../controllers/image.js";

const router = express.Router();


// Use the getImages function in a route
router.get("/images", getImages);
router.post('/upload', postImages);
router.get('/search', getImage);
export default router;
