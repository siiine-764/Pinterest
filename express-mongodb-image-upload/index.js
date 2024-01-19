const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const port = 3001;

// MongoDB connection
mongoose.connect('mongodb+srv://ayacheyassine2000:CwMhkRmGplPQHtCU@cluster0.0qj6qfr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

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
app.post('/upload', upload.single('image'), (req, res) => {
    // Handle the uploaded image data (e.g., save to MongoDB)
    // Example: save the file information to MongoDB
    const imagePath = req.file.path;
    const imageName = req.file.filename;

    // Save to MongoDB using Mongoose (you'll need to define a model)
    const Image = mongoose.model('Image', { path: String, name: String });
    const newImage = new Image({ path: imagePath, name: imageName });
    newImage.save();

    res.send('Image uploaded successfully!');
});

// Express route to fetch image URLs from MongoDB using Mongoose
app.get('/api/images', async (req, res) => {
    try {
        // Use Mongoose connection to get the database
        const db = mongoose.connection;

        // Use Mongoose connection to get the collection
        const collection = db.collection('test');

        // Query image URLs from MongoDB
        // const images = await collection.find();
        const images = await collection.find({}, { projection: { path: 1 } }).toArray();
        
        res.json(images);
    } catch (error) {
        console.error('Error fetching image URLs from MongoDB:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
