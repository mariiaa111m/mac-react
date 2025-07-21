import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">ℹ️ About Us</h2>
      <p className="about-description">
        Restaurantmacdonals was founded in 2023 with a passion for bringing joy and flavor to every meal. What started as a local burger joint has quickly grown into a beloved name for quality fast food, warm atmosphere, and speedy service.
      </p>

      <h3 className="about-subtitle">Our Mission</h3>
      <p>
        To serve delicious meals made with love, using the freshest ingredients, and to create a welcoming place for families and friends.
      </p>

      <h3 className="about-subtitle">Our Story</h3>
      <p>
        Our journey began with one grill, one dream, and a love for burgers. Today, we continue that journey with a team that shares the same passion and values.
      </p>

      <img
        src="https://source.unsplash.com/800x400/?restaurant,kitchen"
        alt="Our Restaurant"
        className="about-image"
      />
    </div>
  );
};

export default AboutPage;