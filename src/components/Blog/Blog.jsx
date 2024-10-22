import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".blog__content .section__header", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".blog__content h4", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".blog__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".blog__content .blog__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
  }, []);

  return (
    <section className="blog" id="blog">
      <div className="section__container blog__container">
        <div className="blog__content">
          <h2 className="section__header">~ LATEST BLOG ~</h2>
          <h4>Capturing Emotion in Every Frame</h4>
          <p>
            "Explore our latest posts for photography tips, 
            behind-the-scenes insights, and updates on our 
            recent projects. From discussing the latest trends 
            to sharing personal anecdotes, our blog is a window 
            into our passion for crafting unforgettable visual 
            narratives. Join us as we shine a light on the art 
            of storytelling through photography and videography."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
