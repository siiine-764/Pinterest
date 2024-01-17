const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const port = 3001;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/imageUpload', { useNewUrlParser: true, useUnifiedTopology: true });

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

    // Save to MongoDB (you'll need to define a model)
    // const Image = mongoose.model('Image', { path: String, name: String });
    // const newImage = new Image({ path: imagePath, name: imageName });
    // newImage.save();

    res.send('Image uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
