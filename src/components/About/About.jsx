import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';

const About = () => {
  useEffect(() => {
    const scrollRevealOptions = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".about__container .section__header", {
      ...scrollRevealOptions,
    });
    ScrollReveal().reveal(".about__container .section__description", {
      ...scrollRevealOptions,
      delay: 500,
      interval: 500,
    });
    ScrollReveal().reveal(".about__container img", {
      ...scrollRevealOptions,
      delay: 1500,
    });
  }, []);

  return (
    <div className="section__container about__container" id="about">
      <h2 className="section__header">WE CAPTURE THE MOMENTS</h2>
      <p className="section__description">
        At Bright-Production, we excel in capturing those fleeting moments that hold immense significance for you. 
        With our passion for photography and keen eye for detail, we transform ordinary moments into extraordinary memories. 
        Our dedication to crafting timeless visuals ensures each moment we capture tells your unique story. Whether it's a wedding, engagement, 
        pre-wedding shoot, or special event, our team is committed to creating stunning images you'll treasure forever. At Bright-Production, we don't just take photos; we create lasting memories.
      </p>
      <p className="section__description">
        Whether it's a milestone celebration, a candid portrait, 
        or the stunning beauty of nature, we aim to capture the 
        essence of every moment, ensuring your memories endure. 
        Rely on us to document the magic of your life's journey, one frame at a time.
      </p>
      <img src="https://ik.imagekit.io/apm2002/Photos/logo-Dark.png?updatedAt=1723875060824" alt="logo" />
    </div>
  );
};

export default About;
