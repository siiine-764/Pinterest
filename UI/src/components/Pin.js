import React from 'react'
import './Pin.css';

const Pin = ({ data }) => {
  return (
    <div className="gallery">
      {data.map(item => (
          <img src={item.name} alt={`Image ${item._id}`} />
      ))}
    </div>
  );
};




export default Pin;
