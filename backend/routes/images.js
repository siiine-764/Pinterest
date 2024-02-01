import express from 'express';
import { getImages , postImages } from "../controllers/image.js";

const router = express.Router();


// Use the getImages function in a route
router.get("/images", getImages);
router.post('/upload', postImages);

export default router;
