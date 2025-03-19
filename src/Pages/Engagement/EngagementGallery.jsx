import React, { useState, useEffect } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "react-photo-album/rows.css";
import '../Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";


const images2 = [
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2020.jpg?updatedAt=1723875132191",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2011.jpg?updatedAt=1723875127177",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2021.jpg?updatedAt=1723875133924",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2015.jpg?updatedAt=1723875130454",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2024.jpg?updatedAt=1723875135073",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%203.jpg?updatedAt=1723875136962",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2019.jpg?updatedAt=1723875131303",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%202.jpg?updatedAt=1723875132291",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2025.jpg?updatedAt=1723875135260",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%204.jpg?updatedAt=1723875140825",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%201.jpg?updatedAt=1723875125315",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2013.jpg?updatedAt=1723875129862",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%205.jpg?updatedAt=1723875142283",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2022.jpg?updatedAt=1723875134305",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2023.jpg?updatedAt=1723875134814",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%206.jpg?updatedAt=1723875142443",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2014.jpg?updatedAt=1723875130609",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2010.jpg?updatedAt=1723875127146",
    "width": 1440,
    "height": 960
  },
  {
    "src": "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2012.jpg?updatedAt=1723875130397",
    "width": 1440,
    "height": 960
  }
];

const EngagementGallery = () => {

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
          'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=engagement'
        );
        const data = await response.json();
        data.reverse();
        console.log("Fetched Data: ", data);
        setImages(() => [...data, ...images2]);  // Store fetched images in the state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);  // Empty dependency array to run only once on component mount


  return (
    <div className='bgcl'>
      <div className="container">
        <h2 className="section__header" id="abcd">Engagement Photos</h2>
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

export default EngagementGallery;
