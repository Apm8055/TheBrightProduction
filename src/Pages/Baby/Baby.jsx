import React, { useState, useEffect } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "react-photo-album/rows.css";
import "../Pages.css";

const images2 = [
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%201.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%202.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%203.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%204.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%205.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%206.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%207.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%208.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2017.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2018.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2019.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2020.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2021.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2022.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2023.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2024.jpg?updatedAt=1723875098921",
        "width": 5760,
        "height": 3840
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%209.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2010.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2011.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2012.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2013.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2014.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2015.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2016.jpg?updatedAt=1723875098921",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%2025.jpg?updatedAt=1723875098921",
        "width": 1440,
        "height": 960
    }
];

const Baby = () => {

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
                    'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=FamilynBaby'
                );
                const data = await response.json();
                console.log("Fetched Data: ", data);
                setImages((prevImages) => [...prevImages, ...data]);   // Store fetched images in the state
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
        </>
    );
};

export default Baby;
