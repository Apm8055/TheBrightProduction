import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; 

const Portfolio = () => {
  return (
    <div className="section__container portfolio__container">
      <h2 className="section__header">~ PORTFOLIO ~</h2>
      <p className="section_description">Click on each section to view more photos.</p>
      <div className="portfolio__grid">
        <div className="portfolio__card">
          <img src="https://ik.imagekit.io/apm2002/Photos/Prewedding/Pre%201.jpg?updatedAt=1723875079608" alt="portfolio" />
          <div className="portfolio__content">
            <Link to="/prewedding" target="_blank" rel="noopener noreferrer">
              <button className="btn">VIEW PHOTOS</button>
            </Link>
          </div>
        </div>
        <div className="portfolio__card">
          <img src="https://ik.imagekit.io/apm2002/Photos/Engagement/Eng%201.jpg?updatedAt=1723875125315" alt="portfolio" />
          <div className="portfolio__content">
            <Link to="/engagement" target="_blank" rel="noopener noreferrer">
              <button className="btn">VIEW PHOTOS</button>
            </Link>
          </div>
        </div>
        <div className="portfolio__card">
          <img src="https://ik.imagekit.io/apm2002/Photos/Wedding/Wed%201.jpg?updatedAt=1723875061821" alt="portfolio" />
          <div className="portfolio__content">
            <Link to="/wedding" target="_blank" rel="noopener noreferrer">
              <button className="btn">VIEW PHOTOS</button>
            </Link>
          </div>
        </div>
        <div className="portfolio__card">
          <img src="https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%2026.jpg?updatedAt=1723875144514" alt="portfolio" />
          <div className="portfolio__content">
            <Link to="/birthday" target="_blank" rel="noopener noreferrer">
              <button className="btn">VIEW PHOTOS</button>
            </Link>
          </div>
        </div>
        <div className="portfolio__card">
          <img src="https://ik.imagekit.io/apm2002/Photos/Family%20&%20Baby/Birthday%201.jpg?updatedAt=1723875098921" alt="portfolio" />
          <div className="portfolio__content">
            <Link to="/baby" target="_blank" rel="noopener noreferrer">
              <button className="btn">VIEW PHOTOS</button>
            </Link>
          </div>
        </div>

        <div className="portfolio__card">
          <img src="https://images.unsplash.com/photo-1485662543942-9ab24cc0acf0?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="portfolio" />
          <div className="portfolio__content">
            <Link to="/videos" target="_blank" rel="noopener noreferrer">
              <button className="btn">VIEW VIDEOS</button>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
