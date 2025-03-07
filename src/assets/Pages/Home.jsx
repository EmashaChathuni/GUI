
import React from 'react';
import './Home.css';
import srilanka from '../images/srilanka.mp4';
import SearchBar from '../../Components/SearchBar';
import { Container, Row, Col, Button } from "react-bootstrap";
import Features from '../../Components/Features';
import TourPackages from '../../Components/TourPackages';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
            {/* Background Video */}
            <video className="background-video" autoPlay loop muted>
              <source src={srilanka} type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="overlay"></div>
            {/* Content Section */}
            <div className="content">
              <h1>Welcome </h1>
              <h2>Explore Sri Lanka with Expert Guide</h2>
              <p>Your journey begins here. Discover the beauty, history, and culture of Sri Lanka.</p>
            </div>
            <SearchBar />
            
            <div className="home-container">
              <div className="marquee">
                <p>Discover Sri Lanka with our expert guide. We provide unforgettable adventures tailored just for you!</p>
              </div>
            </div>
            
            <Features/>
            <TourPackages/>

            <div className="cta-section">
              <h2>Unlock Exclusive Travel Benefits!</h2>
              <p>Create an account to book professional tour guides, find the best accommodations, and rent vehicles for your perfect journey.</p>
              
              
        
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
