import React, { useState, useEffect } from 'react';
import Fancybox from 'react-fancybox';
// import 'fancybox/dist/fancybox.css'; 

const imageUrls = [
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%201.jpg?updatedAt=1723875098569",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%202.jpg?updatedAt=1723875098015",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%203.jpg?updatedAt=1723875098631",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%204.jpg?updatedAt=1723875098507",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%205.jpg?updatedAt=1723875098342",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%206.jpg?updatedAt=1723875098303",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%207.jpg?updatedAt=1723875098024",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%208.jpg?updatedAt=1723875098448",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%209.jpg?updatedAt=1723875098122",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2010.jpg?updatedAt=1723875098603",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2011.jpg?updatedAt=1723875098003",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2012.jpg?updatedAt=1723875098307",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2036.jpg?updatedAt=1723875098596",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2030.jpg?updatedAt=1723875098258",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2031.jpg?updatedAt=1723875098546",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2032.jpg?updatedAt=1723875098405",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2037.jpg?updatedAt=1723875098511",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2038.jpg?updatedAt=1723875098498",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2042.jpg?updatedAt=1723875098037",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2039.jpg?updatedAt=1723875098125",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2040.jpg?updatedAt=1723875098527",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2034.jpg?updatedAt=1723875098076",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2035.jpg?updatedAt=1723875098564",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2041.jpg?updatedAt=1723875098045",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2013.jpg?updatedAt=1723875098418",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2014.jpg?updatedAt=1723875098369",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2015.jpg?updatedAt=1723875098614",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2033.jpg?updatedAt=1723875098098",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2016.jpg?updatedAt=1723875098556",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2017.jpg?updatedAt=1723875098519",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2018.jpg?updatedAt=1723875098414",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2019.jpg?updatedAt=1723875098048",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2020.jpg?updatedAt=1723875098261",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2021.jpg?updatedAt=1723875098326",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2022.jpg?updatedAt=1723875098370",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2023.jpg?updatedAt=1723875098112",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2024.jpg?updatedAt=1723875098493",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2025.jpg?updatedAt=1723875098384",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2026.jpg?updatedAt=1723875098319",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2027.jpg?updatedAt=1723875098457",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2028.jpg?updatedAt=1723875098425",
  "https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%2029.jpg?updatedAt=1723875098553",
];



const PreWedding = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=prewedding'
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
      <h2 className="section__header" id="abcd">Pre-Wedding Photos</h2>
      <div className="service__card">
        <p>Click on the photos to start slideshow.</p>
      </div>

      <div className="container-fluid">
        <div className="row mt-4">
          {imageUrls.map((url, index) => (
            <div key={index} className="item col-sm-3 col-md-3 col-3 mb-3 responsive">
              <a href={url} data-fancybox="gallery1" data-caption={`Photo ${index + 1}`}>
                <img src={url} alt={`photo ${index + 1}`} width="100%" style={{ objectFit: 'cover' }} />
              </a>
            </div>
          ))}

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

export default PreWedding;
