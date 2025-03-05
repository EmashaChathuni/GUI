
import React from "react";
import "./AboutSriLanka.css";

const AboutSriLanka = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Sri Lanka</h2>
        <p>
          Sri Lanka is one of the most exotic & mesmerizing getaways in the world.
          Covered by the azure Indian Ocean, this island paradise owns contrasting
          landscapes to explore, a wealth of wildlife & culture to discover as well as
          stretches of golden sandy beaches to enjoy.
        </p>
        <ul>
          <li><strong>Capital:</strong> Colombo</li>
          <li><strong>Currency:</strong> Sri Lankan Rupee LKR</li>
          <li><strong>Population:</strong> about 21 Million</li>
          <li><strong>Language:</strong> Sinhala, Tamil</li>
          <li><strong>Religion:</strong> Buddhism</li>
          <li><strong>Official Name:</strong> Democratic Socialist Republic of Sri Lanka</li>
          <li><strong>Climate:</strong> The tropical climate brings Sri Lanka temperatures around 27°C - 30°C (about 80°F - 90°F) to most regions of the island.</li>
        </ul>
      </div>
      <div className="about-image">
        <img src="Images/srilankaMap.jpg"  />
      </div>
    </div>
  );
};

export default AboutSriLanka;
