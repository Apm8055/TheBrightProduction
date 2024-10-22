import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css"; 

const EngagementGallery = () => {
  const photos = [
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%201.jpg?updatedAt=1723875125315",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%202.jpg?updatedAt=1723875132291",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%203.jpg?updatedAt=1723875136962",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%204.jpg?updatedAt=1723875140825",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%205.jpg?updatedAt=1723875142283",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%206.jpg?updatedAt=1723875142443",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2010.jpg?updatedAt=1723875127146",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2011.jpg?updatedAt=1723875127177",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2012.jpg?updatedAt=1723875130397",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2013.jpg?updatedAt=1723875129862",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2014.jpg?updatedAt=1723875130609",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2015.jpg?updatedAt=1723875130454",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2019.jpg?updatedAt=1723875131303",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2020.jpg?updatedAt=1723875132191",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2021.jpg?updatedAt=1723875133924",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2022.jpg?updatedAt=1723875134305",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2023.jpg?updatedAt=1723875134814",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2024.jpg?updatedAt=1723875135073",
    "https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%2025.jpg?updatedAt=1723875135260"
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=engagement'
        );
        const data = await response.json();
        setImages(data);  // Store fetched images in the state
        console.log(images);
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
      <div className="container-fluid">
        <div className="row mt-4">
          {photos.map((photo, index) => (
            <div className="item col-sm-3 col-md-3 col-3 mb-3 responsive" key={index}>
              <a href={photo} className="fancybox" data-fancybox="gallery1">
                <img src={photo} alt={`Engagement ${index + 1}`} width="50%" />
              </a>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          {images.map((image, index) => (
            <div className="item col-sm-3 col-md-3 col-3 mb-3 responsive" key={index}>
              <a href={image.url} className="fancybox" data-fancybox="gallery1">
                <img src={image.url} alt={`Engagement ${index + 1}`} width="50%" />
              </a>
            </div>
          ))}
        </div>

        
      </div>
    </div>

    </div>
  );
};

export default EngagementGallery;
