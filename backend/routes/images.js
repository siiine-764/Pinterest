// images.js

import express from 'express';

import { getImages } from "../controllers/image.js";

const router = express.Router();


// Use the getImages function in a route
router.get("/api/images", getImages);


export default router;
