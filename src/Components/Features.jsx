import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { id: 1, title: 'Tour Packages', text: 'Explore the beauty of Sri Lanka with our curated tour packages, offering unforgettable experiences from pristine beaches to lush tea plantations. ' },
    { id: 2, title: 'Flight Booking', text: 'Find and book the best flights for your journey, ensuring a smooth and comfortable travel experience.' },
    { id: 3, title: 'Hotel Booking', text: 'Choose from a variety of accommodations to suit your needs, from luxury hotels to budget-friendly options.' },
    { id: 4, title: 'Destination Booking', text:' Plan your trip to incredible destinations with ease and discover vibrant cultures, historical sites, and stunning landscapes.' },
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
