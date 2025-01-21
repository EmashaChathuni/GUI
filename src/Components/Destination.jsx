import React from 'react';
import './Destination.css';
import {MdLocationPin} from 'react-icon/md';
import {BsFillCreditCardFill} from 'react-icon/md';
import {BsFillCalendarDateFill} from 'react-icon/md';

const Destination = () => {
  return (
    
      <div className ="destination section container">
          <div className='secContainer'>
            <div className ='sectitle' >
                <span className='redText'>EXPLORE NOW</span>
                <h3>Find Your Dream Destination</h3>
                <p> fill in the fields below to find the best spot for your next tour.</p>
        
      </div>
            <div className='searchField grid'>
                <div className='inputField flex'>
                    <MdLocationPin className='icon'/>
                <input type ="text" placeholder='Location'/>
            </div>
            </div>

            <div className='searchField grid'>
                <div className='inputField flex'>
                    <BsFillCreditCardFill className='icon'/>
                <input type ="text" placeholder='Location'/>
            </div>
            </div>

            <div className='searchField grid'>
                <div className='inputField flex'>
                    <BsFillCalendarDateFill className='icon'/>
                <input type ="text" placeholder='Location'/>
            </div>
            </div>

            </div>
  </div>
  );
};

export default Destination;
