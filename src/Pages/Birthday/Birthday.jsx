import React, { useEffect, useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "react-photo-album/rows.css";
import "../Pages.css";

const images2 = [
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2026.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2027.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2028.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2029.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2030.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2031.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2032.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2033.jpg?updatedAt=1723875144514",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2034.jpg?updatedAt=1723875144514",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2035.jpg?updatedAt=1723875144514",
    "width": 960,
    "height": 1440
  }
];


const Birthday = () => {


  const [images, setImages] = useState(images2);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=birthday'
        );
        const data = await response.json();
        console.log("Fetched Data: ", data);
        setImages((prevImages) => [...prevImages, ...data]); // Store fetched images in the state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);  // Empty dependency array to run only once on component mount


  return (

    <div className='bgcl'>
      <div className="container" >
        <h2 className="section__header" id="abcd">Birthday Photos</h2>
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

export default Birthday;







