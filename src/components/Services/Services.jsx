import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Swiper from 'swiper';
import './Services.css';

const Services = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".service__container .section__header", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".service__container .section__description", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".service__card", {
      duration: 1000,
      delay: 1000,
      interval: 500,
    });

    new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });

  }, []);

  return (
    <section className="service" id="service">
      <div className="section__container service__container">
        <h2 className="section__header">~ SERVICES ~</h2>
        <p className="section__description">
          Discover our comprehensive range of services at Bright-Production.
        </p>
        <div className="service__grid">
          <div className="service__card">
            <h4>Pre-Wedding Shoot</h4>
            <p>"Embark on a journey of love and romance with our enchanting pre-wedding photography sessions."</p>
          </div>
          <div className="service__card">
            <h4>Engagement Shoot</h4>
            <p>"Celebrate your love story with our captivating engagement photography services."</p>
          </div>
          <div className="service__card">
            <h4>Wedding Shoot</h4>
            <p>"Experience the epitome of elegance and joy with our exquisite wedding photography services."</p>
          </div>
          <div className="service__card">
            <h4>Birthday Shoot</h4>
            <p>"Make memories to cherish for a lifetime with our vibrant birthday photography services."</p>
          </div>
          <div className="service__card">
            <h4>Family and Baby Shoot</h4>
            <p>"Preserve the precious moments of your growing family with our heartwarming family and baby photography sessions."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
