import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top Section */}
      <div className="footer-top">
        <div className="footer-gallery">
          <img src="/Images/image1.jpg" />
          <img src="/Images/images2.jpg"  />
          <img src="/Images/image4.jpg"  />
          <img src="/Images/images3.jpg"  />
          <img src="/Images/image5.jpg"  />
          <img src="/Images/image6.jpg"  />
        </div>
      </div>

      {/* Footer Middle Section */}
      <div className="footer-middle">
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>No 12, 1st cross Street, Negombo</p>
          <p>Phone: +94763294218</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/tour">Tour</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Discover</h3>
          <ul>
            <li><a href="#">Community Blog</a></li>
            <li><a href="#">Tour Guide</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Travel Inspiration</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2019. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
