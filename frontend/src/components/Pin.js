import React, { useEffect, useRef }  from 'react'
import '../style/Pin.css';


const Pin = ({ data }) => {
  const observer = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          entry.target.classList.toggle("inbound", true);
        } else {
          entry.target.classList.toggle("inbound", false);
        }
      });
    };

    observer.current = new IntersectionObserver(observerCallback, {
      threshold: [0, 1]
    });

    const itemEls = document.querySelectorAll(".item");
    itemEls.forEach((itemEl) => observer.current.observe(itemEl));

    // Clean up function
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []); // Empty dependency array, so it only runs once on mount

  
  return (
    <div  className="gallery">
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
