// ImageUpload.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios for making HTTP requests
import Navigation from '../../components/Navigation'

function Post() {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    // Handler for file input change
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Create a FormData object to store the file
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            // Make a POST request to upload the file
            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully:', response.data);
            navigate("/");
             // Redirect to home page after successful upload
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
          <Navigation />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    );
}



export default Post;
