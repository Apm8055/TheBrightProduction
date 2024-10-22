import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
   <footer id="contact">
  <div className="section__container footer__container">
    <div className="footer__col">
      <img src="https://ik.imagekit.io/apm2002/Photos/logo-Dark.png?updatedAt=1723875060824" alt="logo" />
      <div className="footer__socials">
        <a href="https://youtube.com/@thebrightproduction2112?si=9lnPcIfHwD_MmYsl" target="_blank"><i className="ri-youtube-fill" /></a>
        <a href="https://www.instagram.com/thebrightproduction.tbp/" target="_blank"><i className="ri-instagram-fill" /></a>
        <a href="https://wa.me/919335928986?text=I'm%20interested%20in%20your%20service" target="_blank"><i className="ri-whatsapp-fill" /></a>
        <a href="mailto:thebrightproductiontbp@gmail.com"><i className="ri-mail-fill" /></a>
        <a href="tel:+919335928986" target="_blank"><i className="ri-phone-fill" /></a>
      </div>
    </div>
    <div className="footer__col">
      <ul className="footer__links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#service">SERVICES</a></li>
        <li><a href="#Gallery">GALLERY</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>
    </div>
    <div className="footer__col">
      <h4>STAY IN TOUCH</h4>
      <p>
        We love hearing from you! For inquiries, bookings, 
        or just to say hello, feel free to reach out to us 
        anytime. Connect with us on social media for the latest 
        updates and behind-the-scenes glimpses of our work.
      </p>
    </div>
  </div>
  <div className="footer__bar">
    Copyright © 2024 TheBrightProduction. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
