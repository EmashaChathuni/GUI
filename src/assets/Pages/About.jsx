import React , {useState, useEffect} from 'react';
import './About.css';


const About = () => {

  const images = [
    "Images/1.jpg",
    "Images/2.jpg",
    "Images/3.jpg",
  ]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (

    <div className='about'>
    <div className="about-us-content">
      <h2>About Us</h2>
      <p>
        
        Welcome to our company! We are dedicated to providing the best services to our clients.
          Our team is passionate and driven to exceed expectations. We aim to deliver exceptional
          experiences and build long-lasting relationships with our customers.Our mission is to create meaningful experiences and build lasting relationships with our customers. 
          By embracing integrity, excellence, and innovation, we aim to set a new standard in our industry. 
          Whether you are seeking expert guidance, reliable services, or creative solutions, we are here to help.
          Over the years, we have built a reputation for our dedication, professionalism, and attention to detail. 
          We believe in the power of collaboration and value the trust our clients place in us. Together, we can achieve great things.
      </p>
    </div>
    <div className="about-us-image">
        <img
          src={images[currentImageIndex]}
          alt="Expert Guide"
          className="about-us-carousel-image"
        />
      </div>

      

    </div>
  );
};

export default About;
