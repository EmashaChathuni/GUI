import React, {useState} from "react";
import axios from 'axios';
import "./Service.css";
import "./ContactUs.css";

const Services = () => {
  // Customer Reviews Data
  const reviews = [
    {
      name: "John D.",
      title: "Amazing Tour Experience",
      review:
        "The guide was very friendly and knowledgeable. The tour was well-organized and covered all the main attractions. Highly recommend!",
      image: "/Images/Profile pictures/1.jpeg",
    },
    {
      name: "Sarah P.",
      title: "Great Service",
      review:
        "Everything was on time and the guide made sure everyone was comfortable. It was a memorable experience!",
      image: "/Images/Profile pictures/4.jpeg",
    },
    {
      name: "Mark T.",
      title: "Would Definitely Book Again",
      review:
        "Excellent service and great value for money. The staff was very helpful and the tour exceeded my expectations.",
      image: "/Images/Profile pictures/2.jpeg",
    },
    {
      name: "Emily R.",
      title: "Unforgettable Journey",
      review:
        "The tour was amazing! I discovered hidden gems and learned so much about the city. Will definitely recommend to friends.",
      image: "/Images/Profile pictures/5.jpeg",
    },
    {
      name: "Daniel K.",
      title: "Top-notch Experience",
      review:
        "The entire tour was seamless and the guide was extremely knowledgeable. I would definitely join another tour with this company.",
      image: "/Images/Profile pictures/3.jpeg",
    },
  ];

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/contact/add', formData);
      
      if (response.status === 201) {
        setMessage({ success: 'User registered successfully!', error: '' });
        setFormData({
          name:'',
          email:'',
          message:'',
        });

	
      }

    } catch (err) {
      setMessage({
        success: '',
        error: err.response?.data?.message || 'Something went wrong!',
      });
    }
  };


  return (
    <div className="services-container">
      {/* Services Section */}
      <div className="services">
        <h2>Discover the best travel experiences with our curated services.</h2>
        <div className="service-icons">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
            <p>Custom Destinations</p>
          </div>
          <div className="icon">
            <i className="fas fa-heart"></i>
            <p>Unforgettable Moments</p>
          </div>
          <div className="icon">
            <i className="fas fa-dollar-sign"></i>
            <p>Competitive Pricing</p>
          </div>
          <div className="icon">
            <i className="fas fa-user"></i>
            <p>Self Guide</p>
          </div>
          <div className="icon">
            <i className="fas fa-clock"></i>
            <p>24/7 Available</p>
          </div>
          <div className="icon">
            <i className="fas fa-bus"></i>
            <p>Transportation</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews">
        <h2>What Our Customers Are Saying</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img
                src={review.image}
                alt={review.name}
                className="review-image"
              />
              <h3>{review.title}</h3>
              <p>"{review.review}"</p>
              <span>{review.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contactUs">
        <div className="contact">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Your Name" 
            id = "name"
            name = "name"
            value = {formData.name}
            onChange={handleChange}
            required 
            />
            <input 
            type="email" 
            placeholder="Your Email" 
            id = "email"
            name = "email"
            value = {formData.email}
            onChange={handleChange}
            required />

            <textarea 
            placeholder="Your Message" 
            id = "message"
            name = "message"
            value = {formData.message}
            onChange={handleChange}
            required>
            </textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        </div>
    </div>
  );
};

export default Services;