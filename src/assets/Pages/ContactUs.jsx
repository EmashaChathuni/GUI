import React from "react";
import "./ContactUs.css"; 

const reviews = [
  {
    name: 'John D.',
    title: 'Amazing Tour Experience',
    review: 'The guide was very friendly and knowledgeable. The tour was well-organized and covered all the main attractions. Highly recommend!',
    image: '/Images/Profile pictures/1.jpeg',
  },
  {
    name: 'Sarah P.',
    title: 'Great Service',
    review: 'Everything was on time and the guide made sure everyone was comfortable. It was a memorable experience!',
    image: '/Images/Profile pictures/4.jpeg',
  },
  {
    name: 'Mark T.',
    title: 'Would Definitely Book Again',
    review: 'Excellent service and great value for money. The staff was very helpful and the tour exceeded my expectations.',
    image: '/Images/Profile pictures/2.jpeg',
  },
  {
    name: 'Emily R.',
    title: 'Unforgettable Journey',
    review: 'The tour was amazing! I discovered hidden gems and learned so much about the city. Will definitely recommend to friends.',
    image: '/Images/Profile pictures/5.jpeg',
  },
  {
    name: 'Daniel K.',
    title: 'Top-notch Experience',
    review: 'The entire tour was seamless and the guide was extremely knowledgeable. I would definitely join another tour with this company.',
    image: '/Images/Profile pictures/3.jpeg',
  },
];

const ContactUs = () => {
  return (
    <div className="reviews">
      <h2>What Our Customers Are Saying</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.image} alt={review.name} className="review-image" />
            <h3>{review.title}</h3>
            <p>"{review.review}"</p>
            <span>{review.name}</span>
          </div>
        ))}
      </div>
  
    <div className="contactUs">
      <div className="contact">
      <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};



export default ContactUs;
