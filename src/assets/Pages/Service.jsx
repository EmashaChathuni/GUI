import React from "react";
import './Service.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Join The Adventure with Stories</h2>
      <h2>
        Discover the best travel experiences with our curated services.
      </h2>
      <div className="service-icons">
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
          <p>Custom Destinations</p>
        </div>
        <div className="icon">
          <i className="fas fa-heart"></i>
          <p>Unforgettable Moments</p>
        </div>
        <div className="icon">
          <i className="fas fa-dollar-sign"></i>
          <p>Competitive Pricing</p>
        </div>
        <div className="icon">
          <i className="fas fa-user"></i>
          <p>Self Guide</p>
        </div>
        <div className="icon">
          <i className="fas fa-clock"></i>
          <p>24/7 Available</p>
        </div>
        <div className="icon">
          <i className="fas fa-bus"></i>
          <p>Transportation</p>
        </div>
      </div>
      <button className="button">See All Services</button>

      <div className="special-offers">
      
        <div className="offer-box">
          <img src="couple.jpg"  />
          <h3>Special Offer For Couples</h3>
        </div>
        <div className="offer-box">
          <img src="adventure.jpg" />
          <h3>Special Offer On Adventure Tours</h3>
        </div>
      </div>
    </div>
  
     
  );
};

export default Services;
