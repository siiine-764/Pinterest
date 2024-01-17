import React from 'react'

function Pin({pinSize,imgSrc,name,link}) {
  return (
    <div className={`pin ${pinSize}`}>
        <img className="mainPic" src={imgSrc} alt="mainphoto" />

        <div className="content">
            <h3>{name}</h3>


            <div className="imagesearch">
              <a href={link}>
              
            <img src="https://cdn.w600.comps.canstockphoto.com/right-arrow-flat-pink-icon-stock-image_csp40130369.jpg" alt="rightArrow" className="searchArrow"></img>

              </a>
            
          </div>

        </div>
    </div>
  );
}

export default Pin;
