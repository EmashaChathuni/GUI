import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { id: 1, title: 'Discover Sri Lanka’s Best Destinations', text: 'Explore the rich culture, history, and natural beauty of Sri Lanka through detailed destination profiles. From ancient temples to pristine beaches, this app guides you to the most iconic places across the island.'},
    { id: 2, title: 'Personalized Travel Recommendations', text: 'Tailor your travel experience based on your interests. Whether you’re into adventure, history, or nature, our app suggests destinations and activities that match your preferences for a truly unique journey.'},
    { id: 3, title: 'Local Insights & Travel Tips', text: 'Gain insider knowledge on Sri Lanka’s culture, must-try foods, and local festivals. Our app provides helpful tips to make your travel experience smooth and enriching, ensuring you make the most of your visit.'},
    { id: 4, title: 'Plan Your Perfect Itinerary', text:'Easily create and customize your travel itinerary. Choose your destinations, activities, and accommodations, and let our app help you organize a seamless trip that fits your schedule and budget. ' },
  ];

  return (
    <section className="features">
      {features.map((feature) => (
        <div className="feature-card" key={feature.id}>
          <h3>{feature.id}</h3>
          <h4>{feature.title}</h4>
          <p>{feature.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
