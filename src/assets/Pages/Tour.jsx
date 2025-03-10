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
    { name: 'Minneriya National Park', url: 'https://minneriyasafari.com/about/' },
    { name: 'Wilpattu National Park', url: 'https://en.m.wikipedia.org/wiki/Wilpattu_National_Park' },
    { name: 'Kumana National Park', url: 'https://en.wikipedia.org/wiki/Kumana_National_Park' },
    { name: 'Horton Plains National Park', url: 'https://en.m.wikipedia.org/wiki/Horton_Plains_National_Park' }
  ];

  const Waterfalls = [
    { name: 'Diyaluma Falls', url: 'https://juliasdaysoff.com/sri-lanka/diyaluma-falls-sri-lanka/' },
    { name: 'Bambarakanda Falls', url: 'https://en.m.wikipedia.org/wiki/Bambarakanda_Falls' },
    { name: 'Dunhinda Falls', url: 'https://en.m.wikipedia.org/wiki/Dunhinda_Falls' },
    { name: 'Ravana Falls', url: 'https://en.m.wikipedia.org/wiki/Ravana_Falls' },
    { name: 'St. Clair’s Falls', url: 'https://en.m.wikipedia.org/wiki/St._Clair%27s_Falls' },
    { name: 'Bopath Falls', url: 'https://en.m.wikipedia.org/wiki/Bopath_Ella_Falls' }
  ];

  const Mountains = [
    { name: 'Adam’s Peak', url: 'https://www.teardrop-hotels.com/blog/a-complete-guide-to-climbing-adams-peak-in-sri-lanka/' },
    { name: 'Pidurutalagala', url: 'https://en.m.wikipedia.org/wiki/Pidurutalagala' },
    { name: 'Kirigalpotta', url: 'https://en.m.wikipedia.org/wiki/Kirigalpotta' },
    { name: 'Thotupola Kanda', url: 'https://en.m.wikipedia.org/wiki/Totapolakanda' },
    { name: 'Knuckles Mountain Range', url: 'https://en.m.wikipedia.org/wiki/Knuckles_Mountain_Range' },
    { name: 'Hanthana Mountain Range', url: 'https://en.m.wikipedia.org/wiki/Hanthana_Mountain_Range' }
  ];

  const cityDestinations = [
    { name: 'Colombo', img: colombo, url: 'https://www.goindigo.in/international-destinations/colombo.html' },
    { name: 'Galle', img: galle, url: 'https://www.holidify.com/places/galle/sightseeing-and-things-to-do.html' },
    { name: 'Ella', img: ella, url: 'https://www.thrillophilia.com/destinations/ella/places-to-visit' },
    { name: 'Kandy', img: kandy, url: 'https://www.lovesrilanka.org/destinations/kandy/attractions/' },
    { name: 'Negombo', img: negombo, url: 'https://www.lovesrilanka.org/destinations/negombo/attractions/' },
    { name: 'Nuwara Eliya', img: nuwaraeliya, url: 'https://traveltriangle.com/blog/places-to-visit-in-nuwara-eliya/' }
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
              <a href="https://dayouting.lk/visit/Uva/province/Monaragala/district/Kataragama/city/Places-To-Visit" target="_blank" rel="noopener noreferrer">
                <img src="/Images/katharagama.jpg" title="Katharagama" />
              </a>
              <a href="https://en.wikipedia.org/wiki/Jami_Ul-Alfar_Mosque" target="_blank" rel="noopener noreferrer">
                <img src="/Images/redchruch.jpg" title="Red Church" />
              </a>
              <a href="https://en.wikipedia.org/wiki/Nallur_Kandaswamy_temple" target="_blank" rel="noopener noreferrer">
                <img src="/Images/nallur.jpg" title="Nallur" />
              </a>
              <a href="https://kandyesalaperahera.com/" target="_blank" rel="noopener noreferrer">
                <img src="/Images/perahara.jpg" title="Perahara" />
              </a>
              <a href="https://www.britannica.com/place/Anuradhapura-Sri-Lanka" target="_blank" rel="noopener noreferrer">
                <img src="/Images/anuradhapuraya.jpg" title="Anuradhapuraya" />
              </a>
              <a href="https://en.m.wikipedia.org/wiki/Sigiriya" target="_blank" rel="noopener noreferrer">
                <img src="/Images/sigiriyaart.jpg" title="Sigiriya Art" />
              </a>
              <a href="https://www.ugaescapes.com/destinations/polonnaruwa.html" target="_blank" rel="noopener noreferrer">
                <img src="/Images/polonnaruwa.jpg" title="Polonnaruwa" />
              </a>
              <a href="https://www.holidify.com/places/dambulla/sightseeing-and-things-to-do.html" target="_blank" rel="noopener noreferrer">
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
