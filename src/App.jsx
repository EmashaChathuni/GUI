import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './assets/Pages/Home';
import Login from './assets/Pages/Login';
import Sign_up from './assets/Pages/Sign_up';
import Tour from './assets/Pages/Tour';
import Service from './assets/Pages/Service';
import About from './assets/Pages/About';
import Footer from './Components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div class =" body" >
      <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/sign_up" element={<Sign_up/>}/>
    
        </Routes>

      <Footer/>
    </Router>
    </div>
  );
};

export default App;

