import React from "react";
import './Service.css';

const Services = () => {
  return (
    <div className="services">
      
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
      
      <div className="special-offers">
      
      <div className="offer-box">
       <img src="Images/couple.jpg"  />
      </div>
      <div className="offer-box">
       <img src="Images/adventure.jpg" />
      </div>
    </div>
      
    <div className="tours-container">
      <h2 className="tours-title">Why are Sri Lanka tours ideal for your vacation?</h2>
      <p className="tours-description">
        You may be looking for a tropical paradise, or you may hope to taste the European-chilly weather. Anything is possible in Sri Lanka. And that is why travelers all around the world fall in love with this magical island.
        The experience is such that, generally, travelers top their first Sri Lanka tour with more amazing tours in this beautiful, yet adventurous landscape in the middle of one of the world’s most pristine oceans.
      </p>
      <ul className="tours-list">
        <li>Home to many spectacular beaches with beautiful sunsets</li>
        <li>Better known as the smiling nation where locals are friendly wherever you go</li>
        <li>Travel from sunny beaches to misty mountains to lush jungles in just a couple of hours</li>
        <li>Dream paradise for daring adventurers, couples, history buffs, nature lovers, and the list goes on</li>
        <li>Different types of delightful and authentic Sri Lankan cuisine with exotic spices</li>
      </ul>
      <p className="tours-description">
        Sri Lanka is a tourist destination which even the locals can’t get enough of. Get a firsthand Sri Lanka tour experience.
      </p>
    </div>
 


    </div>
  
     
  );
};

export default Services;
