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
import AboutSriLanka from '../../Components/AboutSrilanka';

const Tour = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [selectedPark, setSelectedPark] = useState('');
  const [selectedWaterfalls, setSelectedWaterfalls] = useState('');
  const [selectedMountains, setSelectedMountains] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
  };

  const handleParkChange = (event) => {
    const selectedName = event.target.value;
    const park = parks.find(p => p.name === selectedName);
    if (park) {
      window.open(park.url, '_blank'); // Open the URL in a new tab
    }
    setSelectedPark(selectedName);
    setSelectedDestination('park');
  };

  const handleWaterfallsChange = (event) => {
    const selectedName = event.target.value;
    const waterfall = Waterfalls.find(w => w.name === selectedName);
    if (waterfall) {
      window.open(waterfall.url, '_blank'); // Open the URL in a new tab
    }
    setSelectedWaterfalls(selectedName);
    setSelectedDestination('waterfall');
  };

  const handleMountainsChange = (event) => {
    const selectedName = event.target.value;
    const mountain = Mountains.find(m => m.name === selectedName);
    if (mountain) {
      window.open(mountain.url, '_blank'); // Open the URL in a new tab
    }
    setSelectedMountains(selectedName);
    setSelectedDestination('mountain');
  };

  const parks = [
    { name: 'Yala National Park', url: 'https://www.yalasrilanka.lk/' },
    { name: 'Udawalawe National Park', url: 'https://udawalawesafari.lk/' },
    { name: 'Minneriya National Park', url: 'https://www.srilanka.travel/national_parks/minneriya-national-park' },
    { name: 'Wilpattu National Park', url: 'https://www.srilanka.travel/national_parks/wilpattu-national-park' },
    { name: 'Kumana National Park', url: 'https://www.srilanka.travel/national_parks/kumana-national-park' },
    { name: 'Horton Plains National Park', url: 'https://www.srilanka.travel/national_parks/horton-plains-national-park' }
  ];

  const Waterfalls = [
    { name: 'Diyaluma Falls', url: 'https://www.srilanka.travel/waterfalls/diyaluma-falls' },
    { name: 'Bambarakanda Falls', url: 'https://www.srilanka.travel/waterfalls/bambarakanda-falls' },
    { name: 'Dunhinda Falls', url: 'https://www.srilanka.travel/waterfalls/dunhinda-falls' },
    { name: 'Ravana Falls', url: 'https://www.srilanka.travel/waterfalls/ravana-falls' },
    { name: 'St. Clair’s Falls', url: 'https://www.srilanka.travel/waterfalls/st-clairs-falls' },
    { name: 'Bopath Falls', url: 'https://www.srilanka.travel/waterfalls/bopath-falls' }
  ];

  const Mountains = [
    { name: 'Adam’s Peak', url: 'https://www.srilanka.travel/mountains/adams-peak' },
    { name: 'Pidurutalagala', url: 'https://www.srilanka.travel/mountains/pidurutalagala' },
    { name: 'Kirigalpotta', url: 'https://www.trekking.lk/kirigalpotta' },
    { name: 'Thotupola Kanda', url: 'https://www.srilanka.travel/mountains/thotupola-kanda' },
    { name: 'Knuckles Mountain Range', url: 'https://www.srilanka.travel/mountains/knuckles-mountain-range' },
    { name: 'Hanthana Mountain Range', url: 'https://www.srilanka.travel/mountains/hanthana-mountain-range' }
  ];

  const cityDestinations = [
    { name: 'Colombo', img: colombo, url: 'https://www.srilanka.travel/colombo' },
    { name: 'Galle', img: galle, url: 'https://www.srilanka.travel/galle' },
    { name: 'Ella', img: ella, url: 'https://www.srilanka.travel/ella' },
    { name: 'Kandy', img: kandy, url: 'https://www.srilanka.travel/kandy' },
    { name: 'Negombo', img: negombo, url: 'https://www.srilanka.travel/negombo' },
    { name: 'Nuwara Eliya', img: nuwaraeliya, url: 'https://www.srilanka.travel/nuwara-eliya' }
  ];

  return (
    <div className='Tour'>
      <div className="background-container">
        <h2>Let Us Show You The Beauty Of The SriLanka</h2>
      </div>
      <AboutSriLanka />
      <div className='horizontal-section'>
        <div className='Tour-content' onClick={() => handleTourClick('city')}>
          <img src={citytour} />
          <h3>City Tours</h3>
          <p>Explore the vibrant cities of Sri Lanka with our expert guides.</p>
        </div>

        <div className='Tour-content' onClick={() => handleTourClick('nature')}>
          <img src={naturaltour} />
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
              {cityDestinations.map((destination, index) => (
                <a key={index} href={destination.url} target="_blank" rel="noopener noreferrer">
                  <img src={destination.img} title={destination.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTour === 'nature' && (
        <div className='Tour-details'>
          <div className="destinations">
            <h2>Top Destinations</h2>
            <div className="row">
              <div className="destination-item">
                <div className='destination-item-container'>
                  <img src={yala} alt="National Parks" />
                  <h3>National Parks</h3>
                  <p>Explore the breathtaking National Parks with diverse wildlife and stunning landscapes.</p>
                  <div><Nationalpark /></div>
                  <select value={selectedPark} onChange={handleParkChange}>
                    <option value="" disabled>Select a National Park</option>
                    {parks.map((park, index) => (
                      <option key={index} value={park.name}>{park.name}</option>
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
                  {Waterfalls.map((waterfall, index) => (
                    <option key={index} value={waterfall.name}>{waterfall.name}</option>
                  ))}
                </select>
              </div>
              <div className="destination-item">
                <img src={mountains} alt="Mountains" />
                <h3>Mountains</h3>
                <p>Discover the serene mountains, ideal for hiking, camping, and adventure sports.</p>
                <select value={selectedMountains} onChange={handleMountainsChange}>
                  <option value="" disabled>Select a Mountain</option>
                  {Mountains.map((mountain, index) => (
                    <option key={index} value={mountain.name}>{mountain.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {selectedDestination === 'park' && selectedPark && (
            <div className='destination-details'>
              <h3>{selectedPark}</h3>
              
            </div>
          )}

          {selectedDestination === 'waterfall' && selectedWaterfalls && (
            <div className='destination-details'>
              <h3>{selectedWaterfalls}</h3>
              
            </div>
          )}

          {selectedDestination === 'mountain' && selectedMountains && (
            <div className='destination-details'>
              <h3>{selectedMountains}</h3>
             
            </div>
          )}
        </div>
      )}

      {selectedTour === 'cultural' && (
        <div className='Tour-details'>
          <div className='destinations'>
            <h2>Cultural Tours Details</h2>
            <div className='cultural-destination'>
              <a href="https://www.srilanka.travel/katharagama" target="_blank" rel="noopener noreferrer">
                <img src="/Images/katharagama.jpg" title="Katharagama" />
              </a>
              <a href="https://www.srilanka.travel/redchruch" target="_blank" rel="noopener noreferrer">
                <img src="/Images/redchruch.jpg" title="Red Church" />
              </a>
              <a href="https://www.srilanka.travel/nallur" target="_blank" rel="noopener noreferrer">
                <img src="/Images/nallur.jpg" title="Nallur" />
              </a>
              <a href="https://www.srilanka.travel/perahara" target="_blank" rel="noopener noreferrer">
                <img src="/Images/perahara.jpg" title="Perahara" />
              </a>
              <a href="https://www.srilanka.travel/anuradhapuraya" target="_blank" rel="noopener noreferrer">
                <img src="/Images/anuradhapuraya.jpg" title="Anuradhapuraya" />
              </a>
              <a href="https://www.srilanka.travel/sigiriyaart" target="_blank" rel="noopener noreferrer">
                <img src="/Images/sigiriyaart.jpg" title="Sigiriya Art" />
              </a>
              <a href="https://www.srilanka.travel/polonnaruwa" target="_blank" rel="noopener noreferrer">
                <img src="/Images/polonnaruwa.jpg" title="Polonnaruwa" />
              </a>
              <a href="https://www.srilanka.travel/dhambulla" target="_blank" rel="noopener noreferrer">
                <img src="/Images/dhambulla.jpg" title="Dhambulla" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tour;
