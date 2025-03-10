import React, { useState } from "react"; // ✅ Import useState
import axios from "axios";
import "./Service.css";
import "./ContactUs.css";

const Services = () => {
  // State for Contact Us Form
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(""); // For success/error messages

  // Handle form input changes
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/contact", contact);

      if (res.data.success) {
        setResponseMessage("Message sent successfully!");
        setContact({ name: "", email: "", message: "" }); // Clear form after submission
      }
    } catch (error) {
      setResponseMessage("Error sending message. Please try again.");
      console.error("Error:", error);
    }
  };

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
              name="name"
              placeholder="Your Name"
              value={contact.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contact.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contact.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Services;
