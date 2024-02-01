// ImageUpload.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import axios from 'axios'; // Import axios for making HTTP requests
import Navigation from '../../components/Navigation'

const Post = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const response = await fetch('http://localhost:3001/api/gallery/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, image })
            });
            
            const data = await response.json();
            if (response.status  === 400) {
                alert("post uploaded successfully:");
            }
            else
                navigate("/");
            console.log(data); // Handle response from the server
        } catch (error) {
            console.error('Error in posting:', error);
        }
    };
    return (
        <div>
          <Navigation />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />

            <button type="submit">Post</button>
        </form>
        </div>
    );
}



export default Post;
