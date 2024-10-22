import React from 'react';
import "./Pages.css";

const images = [
  {
    src: 'https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2010.jpg?updatedAt=1723875081313',
    alt: 'Wedding Photo 10'
  },
  {
    src: 'https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2016.jpg?updatedAt=1723875081313',
    alt: 'Prewedding Photo 16'
  },
  {
    src: 'https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%207.jpg?updatedAt=1723875081313',
    alt: 'Engagement Photo 7'
  },
  {
    src: 'https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2035.jpg?updatedAt=1723875081313',
    alt: 'Birthday Photo 35'
  }
];

const Gallery = () => {
  return (
    <div className="container">
      <h2 className="section__header" id="abcd">Gallery</h2>
      <div className="service__card">
        <p>Click on the photos to start the slideshow.</p>
      </div>
      <div className="container-fluid">
        <div className="row mt-4">
          {images.map((image, index) => (
            <div key={index} className="item col-sm-3 col-md-3 col-3 mb-3 responsive">
              <a href={image.src} className="fancybox" data-fancybox="gallery1">
                <img src={image.src} alt={image.alt} width="50%" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
