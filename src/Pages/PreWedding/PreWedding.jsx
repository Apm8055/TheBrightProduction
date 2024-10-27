import React, { useState, useEffect } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "react-photo-album/rows.css";
import "../Pages.css";

const images2 = [
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%201.jpg?updatedAt=1723875098569",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%202.jpg?updatedAt=1723875098015",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%203.jpg?updatedAt=1723875098631",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%204.jpg?updatedAt=1723875098507",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%205.jpg?updatedAt=1723875098342",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%206.jpg?updatedAt=1723875098303",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%207.jpg?updatedAt=1723875098024",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%208.jpg?updatedAt=1723875098448",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%209.jpg?updatedAt=1723875098122",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2010.jpg?updatedAt=1723875098603",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2011.jpg?updatedAt=1723875098003",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2012.jpg?updatedAt=1723875098307",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2036.jpg?updatedAt=1723875098596",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2030.jpg?updatedAt=1723875098258",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2031.jpg?updatedAt=1723875098546",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2032.jpg?updatedAt=1723875098405",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2037.jpg?updatedAt=1723875098511",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2038.jpg?updatedAt=1723875098498",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2042.jpg?updatedAt=1723875098037",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2039.jpg?updatedAt=1723875098125",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2040.jpg?updatedAt=1723875098527",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2034.jpg?updatedAt=1723875098076",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2035.jpg?updatedAt=1723875098564",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2041.jpg?updatedAt=1723875098045",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2013.jpg?updatedAt=1723875098418",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2014.jpg?updatedAt=1723875098369",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2015.jpg?updatedAt=1723875098614",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2033.jpg?updatedAt=1723875098098",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2016.jpg?updatedAt=1723875098556",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2017.jpg?updatedAt=1723875098519",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2018.jpg?updatedAt=1723875098414",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2019.jpg?updatedAt=1723875098048",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2020.jpg?updatedAt=1723875098261",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2021.jpg?updatedAt=1723875098326",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2022.jpg?updatedAt=1723875098370",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2023.jpg?updatedAt=1723875098112",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2024.jpg?updatedAt=1723875098493",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2025.jpg?updatedAt=1723875098384",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2026.jpg?updatedAt=1723875098319",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2027.jpg?updatedAt=1723875098457",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2028.jpg?updatedAt=1723875098425",
    "width": 960,
    "height": 1440
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2029.jpg?updatedAt=1723875098553",
    "width": 960,
    "height": 1440
  }
];



const PreWedding = () => {

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
          'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=prewedding'
        );
        const data = await response.json();
        console.log("Fetched Data: ", data);
        setImages((prevImages) => [...prevImages, ...data]);  // Store fetched images in the state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);  // Empty dependency array to run only once on component mount


  return (
    <div className='bgcl'>
      <div className="container">
        <h2 className="section__header" id="abcd">Pre-Wedding Photos</h2>
        <div className="service__card">
          <p>Click on the photos to start slideshow.</p>
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

export default PreWedding;
