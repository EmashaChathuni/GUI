
import React from 'react';
import './TourGuides.css';

const tourGuides = [
  {
    id: 1,
    name: "John Doe",
    photo: "/Images/Profile pictures/john.jpeg",
    description: "Experienced guide with deep knowledge of Sri Lankan culture and history."
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "/Images/Profile pictures/Jane.jpeg",
    description: "Specializes in wildlife and eco-tourism adventures."
  },
  {
    id: 3,
    name: "Michael Fernando",
    photo: "/Images/Profile pictures/michel.jpeg",
    description: "Expert in historical and archaeological sites."
  },
  {
    id: 4,
    name: "Samantha Perera",
    photo: "/Images/Profile pictures/samantha.jpeg",
    description: "Fluent in multiple languages and specializes in city tours."
  },
  {
    id: 5,
    name: "Rajiv Kumara",
    photo: "/Images/Profile pictures/rajiv.jpeg",
    description: "Adventure tour guide with experience in trekking and hiking."
  },
  {
    id: 6,
    name: "Nimali Jayawardena",
    photo: "/Images/Profile pictures/nimali.jpeg",
    description: "Passionate about food and cultural experiences."
  },
  {
    id: 7,
    name: "Kasun Wijesinghe",
    photo: "/Images/Profile pictures/kasun.jpeg",
    description: "Experienced in luxury and customized private tours."
  },
  {
    id: 8,
    name: "Dilani Senanayake",
    photo: "/Images/Profile pictures/dilani.jpeg",
    description: "Specialist in bird watching and wildlife photography tours."
  },
  {
    id: 9,
    name: "Amal Weerasinghe",
    photo: "/Images/Profile pictures/Amal.jpeg",
    description: "Expert in adventure tourism and water sports."
  },
  {
    id: 10,
    name: "Chathuri Fonseka",
    photo: "/Images/Profile pictures/chathuri.jpeg",
    description: "Cultural and religious tour specialist with over 10 years of experience."
  },
];

const TourGuides = () => {
  const handleBookGuide = (guideName) => {
    alert(`You have booked ${guideName}. We will contact you soon!`);
  };

  return (
    <div className="tour-guides">
      <h2>Our Tour Guides</h2>
      <p>Meet our team of expert guides who are passionate about sharing their knowledge and experiences with you.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {tourGuides.map((guide) => (
          <div key={guide.id} className="guide-card">
            <img src={guide.photo} alt={guide.name} className="guide-image" />
            <h2 className="guide-name">{guide.name}</h2>
            <p className="guide-description">{guide.description}</p>
            <button className="book-button" onClick={() => handleBookGuide(guide.name)}>Book Guide</button>
          </div>
        ))}
      </div>

      <div className="iframe-container">
        <h3>Book Your Stay</h3>
        <iframe 
          className="booking-iframe"
          src="https://www.booking.com"
          title="Hotel Booking"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="iframe-container">
        <h3>Book a Vehicle for Your Tour</h3>
        <iframe 
          className="booking-iframe"
          src="https://www.rentalcars.com" 
          title="Vehicle Booking"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TourGuides;
