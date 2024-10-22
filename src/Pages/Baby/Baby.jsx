import React,{useState,useEffect} from 'react';
import "../Pages.css";

const photos = [
    "Birthday%201.jpg",
    "Birthday%202.jpg",
    "Birthday%203.jpg",
    "Birthday%204.jpg",
    "Birthday%205.jpg",
    "Birthday%206.jpg",
    "Birthday%207.jpg",
    "Birthday%208.jpg",
    "Birthday%2017.jpg",
    "Birthday%2018.jpg",
    "Birthday%2019.jpg",
    "Birthday%2020.jpg",
    "Birthday%2021.jpg",
    "Birthday%2022.jpg",
    "Birthday%2023.jpg",
    "Birthday%2024.jpg",
    "Birthday%209.jpg",
    "Birthday%2010.jpg",
    "Birthday%2011.jpg",
    "Birthday%2012.jpg",
    "Birthday%2013.jpg",
    "Birthday%2014.jpg",
    "Birthday%2015.jpg",
    "Birthday%2016.jpg",
    "Birthday%2025.jpg"
];

const Baby = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=FamilynBaby'
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
        <>
        <div className='bgcl'>
        <div className="container">
            <h2 className="section__header" id="abcd">Family and Baby Photos</h2>
            <div className="service__card">
                <p>Click on the photos to start slide show.</p>
            </div>
            <div className="container-fluid">
                <div className="row mt-4">
                    {photos.map((image, index) => (
                        <div key={index} className="item col-sm-3 col-md-3 col-3 mb-3 responsive">
                            <a
                                href={`https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/${image}?updatedAt=1723875098921`}
                                className="fancybox"
                                data-fancybox="gallery1"
                            >
                                <img
                                    src={`https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/${image}?updatedAt=1723875098921`}
                                    alt={`photo ${index + 1}`}
                                    width="50%"
                                />                          
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
        </>
    );
};

export default Baby;
