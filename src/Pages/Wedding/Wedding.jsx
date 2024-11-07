import { useEffect, useState } from "react";
import React from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "react-photo-album/rows.css";
import '../Pages.css';


const images2 = [
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2025.jpg?updatedAt=1723875196470",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2018.jpg?updatedAt=1723875158297",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2019.jpg?updatedAt=1723875163331",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2013.jpg?updatedAt=1723875131428",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2016.jpg?updatedAt=1723875147855",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2026.jpg?updatedAt=1723875202070",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2023.jpg?updatedAt=1723875186084",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2032.jpg?updatedAt=1723875232352",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2024.jpg?updatedAt=1723875191265",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2017.jpg?updatedAt=1723875152785",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2027.jpg?updatedAt=1723875207212",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2022.jpg?updatedAt=1723875180557",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2039.jpg?updatedAt=1723875269543",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2029.jpg?updatedAt=1723875217191",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2020.jpg?updatedAt=1723875168942",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2011.jpg?updatedAt=1723875120656",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2028.jpg?updatedAt=1723875212326",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2014.jpg?updatedAt=1723875136762",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2015.jpg?updatedAt=1723875142322",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2035.jpg?updatedAt=1723875248452",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2030.jpg?updatedAt=1723875222325",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2021.jpg?updatedAt=1723875174961",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%206.jpg?updatedAt=1723875092595",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2038.jpg?updatedAt=1723875264223",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2028.jpg?updatedAt=1723875212326",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2040.jpg?updatedAt=1723875274707",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2033.jpg?updatedAt=1723875237902",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%207.jpg?updatedAt=1723875098008",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2010.jpg?updatedAt=1723875114914",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2036.jpg?updatedAt=1723875253408",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%205.jpg?updatedAt=1723875086633",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%209.jpg?updatedAt=1723875109277",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%204.jpg?updatedAt=1723875081371",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2034.jpg?updatedAt=1723875242956",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2031.jpg?updatedAt=1723875227461",
        "width": 1440,
        "height": 960
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%2037.jpg?updatedAt=1723875258893",
        "width": 960,
        "height": 1440
    },
    {
        "src": "https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%203.jpg?updatedAt=1723875075058",
        "width": 1440,
        "height": 960
    }
];


const Wedding = () => {

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
                    'https://enchanting-taiyaki-c89136.netlify.app/.netlify/functions/getImages?category=wedding'
                );
                const data = await response.json();
                console.log("Fetched Data: ", data);
                setImages(() => [...images2, ...data]);  // Store fetched images in the state
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);  // Empty dependency array to run only once on component mount

    return (
        <div className='bgcl'>
            <div className="container">
                <h2 className="section__header" id="abcd">Wedding Photos</h2>
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
    );
};

export default Wedding;
