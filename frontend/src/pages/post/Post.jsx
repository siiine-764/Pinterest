// ImageUpload.js
import React, { useState } from 'react';

function Post() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    // Handle image selection
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Handle image upload logic
    if (selectedImage) {
      // Implement your image upload logic here
      console.log('Uploading image:', selectedImage);
    }
  };

  return (
    <div>
      <h2>Image Upload Page</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default Post;
