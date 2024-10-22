import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="section__container gallery__container" id="Gallery">
      <h2 className="section__header">~ GALLERY ~</h2>
      <div className="gallery__grid">
        <img src="https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2028.jpg?updatedAt=1723875145352" alt="gallery" />
        <img src="https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2011.jpg?updatedAt=1723875127177" alt="gallery" />
        <img src="https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2017.jpg?updatedAt=1723875109102" alt="gallery" />
        <img src="https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2012.jpg?updatedAt=1723875082392" alt="gallery" />
        <img src="https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2014.jpg?updatedAt=1723875065244" alt="gallery" />
        <img src="https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2030.jpg?updatedAt=1723875145978" alt="gallery" />
        <img src="https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2014.jpg?updatedAt=1723875072633" alt="gallery" />
        <img src="https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%203.jpg?updatedAt=1723875063079" alt="gallery" />
      </div>
      <div className="gallery__btn">
        <a href="Pages/gallery.html" target="_blank" rel="noopener noreferrer"><button className="btn">VIEW PHOTOS</button></a>
      </div>
    </section>
  );
};

export default Gallery;
