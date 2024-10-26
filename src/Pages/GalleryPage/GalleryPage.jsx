import React, { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "react-photo-album/rows.css";



const images = [
  {
      "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%207.jpg?updatedAt=1723875081313",
      "width": 960,
      "height": 1440
  },
  {
      "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2010.jpg?updatedAt=1723875081313",
      "width": 960,
      "height": 1440
  },
  {
      "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2016.jpg?updatedAt=1723875081313",
      "width": 960,
      "height": 1440
  },
  {
      "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2035.jpg?updatedAt=1723875081313",
      "width": 960,
      "height": 1440
  }
];


const GalleryPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // let ans = []
  // for(let i=0;i<images2.length;i++){
  //   const img = new Image();
  //   img.src = images2[i].src;
  //   img.onload = () => {
  //     ans.push({
  //       src: images2[i].src,
  //       width: img.width,
  //       height: img.height
  //     })
  //   }
  // }

  // console.log(ans)

  return (
    <div className='bgcl'>
      <div className="container">
        <h2 className="section__header" id="abcd">Gallery</h2>
        <div className="service__card">
          <p>Click on the photos to start the slideshow.</p>
        </div>
      </div>

      <RowsPhotoAlbum
        photos={images}
        // targetRowHeight={150}
        // rowConstraints={{ singleRowMaxHeight: 250 }}
        onClick={({ index }) => {
          openLightbox(index);
        }}
      />

      {isOpen && (
        <Lightbox
          slides={images.map((img) => ({ src: img.src }))}
          index={photoIndex}
          open={isOpen}
          close={() => setIsOpen(false)}
        />
      )}

    </div>
  );
};

export default GalleryPage;
