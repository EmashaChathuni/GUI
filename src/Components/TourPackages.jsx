import React from 'react';
import './TourPackages.css';

const attractions = [
{
    name: "Sigiriya Rock Fortress",
    image: "Images/Sigiriya.jpg",
    description: "A UNESCO World Heritage site and iconic landmark.",
  },
  {
    name: "Temple of the Tooth",
    image: "Images/templeoftooth.jpg",
    description: "A sacred Buddhist temple in Kandy.",
  },
  {
    name: "Arugam Bay",
    image: "Images/arugambay.jpg",
    description: "A surfer's paradise with golden beaches and laid-back vibes.",
  },
  
  {
    name: "Galle Fort",
    image: "Images/gallefort.jpg",
    description: "A historic fort and UNESCO World Heritage site.",
  },
  {
    name: "Yala National Park",
    image: "Images/yala.jpg",
    description: "A wildlife haven known for leopards and elephants.",
  },
  
  {
    name: "Nine Arch",
    image: "Images/ninearch.jpg",
    description: "A stunning architectural marvel offering picturesque views ",
  },
  {
    name: "Mirissa",
    image: "Images/mirissa.jpg",
    description: " Tropical paradise famous for whale watching and beaches.",
  },
  {
    name: "Nuwara Eliya",
    image: "Images/nuwaraeliya.jpg",
    description: "A picturesque hill station with tea plantations.",
  },
 {
    name: "Horton Plains",
    image: "Images/hortainplains.jpg",
    description: "A misty plateau with breathtaking views and the famous World's End.",
  },
  {
    name: "Adam's Peak",
    image: "Images/siripadaya.jpg",
    description: "A sacred mountain with a sunrise trek and religious significance.",
  },
  
];
const AttractionsGrid=() =>{
  return (
    <div className="attractionsgrid">
      <h2>Top Attractions</h2>
      <div className="grid">
        {attractions.map((attraction, index) => (
          <div className="card" key={index}>
            <img src={attraction.image} alt={attraction.name} />
            <h3>{attraction.name}</h3>
            <p>{attraction.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AttractionsGrid;


      
 