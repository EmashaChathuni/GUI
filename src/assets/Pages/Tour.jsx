import React, { useState } from 'react';
import './Tour.css';
import citytour from '../Images/citytour.jpeg';
import naturaltour from '../Images/naturaltour.jpg';
import culturaltour from '../Images/culturaltour.jpeg';
import yala from '../Images/yala.jpg';
import waterfalls from '../Images/waterfalls.jpg';
import mountains from '../Images/mountains.jpg';
import colombo from '../Images/colombo.jpeg';
import ella from '../Images/ella.jpg';
import negombo from '../Images/negombo.jpg';
import kandy from '../Images/kandy.jpeg';
import galle from '../Images/galle.jpg';
import nuwaraeliya from '../Images/nuwaraeliya.jpg';
import Nationalpark from '../../Components/Nationalpark';


const Tour = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedPark, setSelectedPark] = useState('');
  const [selectedWaterfalls, setSelectedWaterfalls] = useState('');
  const [selectedMountains, setSelectedMountains] = useState('');



  const handleTourClick = (tour) => {
    setSelectedTour(tour);
  };
  const handleParkChange = (event) => {
    setSelectedPark(event.target.value);
  };
  const handleWaterfallsChange = (event) => {
    setSelectedPark(event.target.value);
  };
  const handleMountainsChange = (event) => {
    setSelectedPark(event.target.value);
  };

  const parks = [
    'Yala National Park',
    'Udawalawe National Park',
    'Minneriya National Park',
    'Wilpattu National Park',
    'KumaNational Park',
    'Horton Plains national Park'
  ];
  const Waterfalls= [
    'Yala National Park',
    'Udawalawe National Park',
    'Minneriya National Park',
    'Wilpattu National Park',
    'KumaNational Park',
    'Horton Plains national Park'
  ];
  const Mountains = [
    'Yala National Park',
    'Udawalawe National Park',
    'Minneriya National Park',
    'Wilpattu National Park',
    'KumaNational Park',
    'Horton Plains national Park'
  ];

  return (
    <div className='Tour'>
      <div className="background-container">
        <h2>Let Us Show You The Beauty Of The SriLanka</h2>
      </div>

      <div className='horizontal-section'>
        <div className='Tour-content' onClick={() => handleTourClick('city')}>
      <img src={citytour} />
          <h3>City Tours</h3>
          <p>Explore the vibrant cities of Sri Lanka with our expert guides.</p>
          
        </div>

        <div className='Tour-content' onClick={() => handleTourClick('nature')}>
          <img src={naturaltour}/>
          <h3>Nature Tours</h3>
          <p>Discover the breathtaking landscapes and wildlife.</p>
        </div>

        <div className='Tour-content' onClick={() => handleTourClick('cultural')}>
          <img src={culturaltour} />
          <h3>Cultural Tours</h3>
          <p>Experience the rich cultural heritage of Sri Lanka.</p>
        </div>
      </div>
      

      {selectedTour === 'city' && (
        <div className='Tour-details'>
            <div className="destinations">
             <h2>Top Destinations</h2>
         
          <div className='city-destination'>
          <img src ={colombo}/>
          <img src ={galle}/>
          <img src ={ella}/>
          <img src ={kandy}/>
          <img src ={negombo}/>
          <img src={nuwaraeliya}/>
       
    </div>
        </div>
        </div>
      )}

      {selectedTour === 'nature' && (
        <div className='Tour-details'>
          <div className="destinations">
      <h2>Top Destinations</h2>
      <p>Details about Nature Tours...</p>
      <div className="destination-item">
        <div className='destination-item-container'>
      <img src= {yala} alt="National Parks" />
      <h3>National Parks</h3>
      <p>Explore the breathtaking National Parks with diverse wildlife and stunning landscapes.</p>
      <div><Nationalpark/></div>
      <select value={selectedPark} onChange={handleParkChange}>
              <option value="" disabled>Select a National Park</option>
              {parks.map((park, index) => (
                <option key={index} value={park}>{park}</option>
              ))}
            </select>
            </div>
    </div>
    <div className="destination-item">
      <img src={waterfalls} alt="Waterfalls" />
      <h3>Waterfalls</h3>
      <p>Experience the majestic waterfalls, a perfect spot for nature lovers and photographers.</p>
      <select value={selectedWaterfalls} onChange={handleWaterfallsChange}>
              <option value="" disabled>Select a Waterfall</option>
              {parks.map((Waterfalls, index) => (
                <option key={index} value={Waterfalls}>{Waterfalls}</option>
              ))}
            </select>
    </div>
    <div className="destination-item">
      <img src={mountains} alt="Mountains" />
      <h3>Mountains</h3>
      <p>Discover the serene mountains, ideal for hiking, camping, and adventure sports.</p>
      <select value={selectedMountains} onChange={handleMountainsChange}>
              <option value="" disabled>Select a Mountain</option>
              {parks.map((Mountains, index) => (
                <option key={index} value={Mountains}>{Mountains}</option>
              ))}
            </select>
    </div>
    </div>
        </div>
      )}
      {selectedTour === 'cultural' && (
        <div className='Tour-details'>
          <h3>Cultural Tours Details</h3>
          <p>Details about Cultural Tours...</p>
          <div className='Tour-destinatation'>
            <img src="/images/katharagama.jpg"/>
            <img src="/images/example.jpg"/>
            <img src="/images/example.jpg"/>
            <img src="/images/example.jpg"/>
            <img src="/images/example.jpg"/>
            <img src="/images/example.jpg"/>
            
            </div>
          
        </div>
      )}
  
    </div>
  );
};

export default Tour;
