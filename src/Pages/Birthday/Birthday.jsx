import React, { useEffect, useState } from 'react';
// import "./Pages.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fancyapps/fancybox/dist/jquery.fancybox.min.css"; 


const Birthday = () => {


  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=birthday'
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
      <div className="container" >
        <h2 className="section__header" id="abcd">Birthday Photos</h2>
        <div className="service__card">
          <p>Click on the photos to start the slideshow.</p>
        </div>

        <div className="container-fluid">
          <div className="row mt-4">
                {[
                  "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"
                ].map((num) => (
                  <div className="item col-sm-3 col-md-3 col-3 mb-3 responsive" key={num}>
                    <a
                      href={`https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%20${num}.jpg?updatedAt=1723875144514`}
                      data-fancybox="gallery1"
                    >
                      <img
                        src={`https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%20${num}.jpg?updatedAt=1723875144514`}
                        alt={`photo ${num}`}
                        width="100%"
                      />
                    </a>
                  </div>
                ))}

            {images.map((image, index) => (
              <div key={index} className="item col-sm-3 col-md-3 col-3 mb-3 responsive">
                <a href={image.url} data-fancybox="gallery1" data-caption={`Photo ${index + 1}`}>
                  <img src={image.url} alt={`photo ${index + 1}`} width="100%" style={{ objectFit: 'cover' }} />
                </a>
              </div>
            ))}

          </div>  

        </div>
      </div>
    </div>
 
  );
};

export default Birthday;








// import { useEffect, useState } from 'react';

// const Birthday = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch(
//           'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=birthday'
//         );
//         const data = await response.json();
//         setImages(data);  // Store fetched images in the state
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);  // Empty dependency array to run only once on component mount

//   return (
//     <div>
//       <h2>Birthday Images</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {images.length > 0 ? (
//           images.map((image, index) => (
//             <div key={index} style={{ margin: '10px' }}>
//               <img src={image.url} alt={`Birthday ${index}`} style={{ width: '200px', height: '200px' }} />
//             </div>
//           ))
//         ) : (
//           <p>No images found for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Birthday;







