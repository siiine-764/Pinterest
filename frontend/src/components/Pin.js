import React from 'react'
import '../style/Pin.css';

const Pin = ({ data }) => {
  return (
    <div className="gallery">
      
      {data.map(item => (
          <img src={item.image} alt={`Image ${item.title}`} />

      ))}
      {data.map(item => (
          <p> {item.title}</p>
      ))}
    </div>
  );
};

export default Pin;
