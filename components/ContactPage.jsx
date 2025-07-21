import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">📞 Contact Us</h2>
      <p className="contact-description">We'd love to hear from you!</p>

      <div className="contact-info">
        <p><strong>Address:</strong> 123 Mac Avenue, Food City, FL 33000</p>
        <p><strong>Phone:</strong> +1 (800) 123-4567</p>
        <p><strong>Email:</strong> support@restaurantmac.com</p>
      </div>

      <iframe
        className="contact-map"
        title="restaurant-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867671567067!2d-122.41941508468108!3d37.774929779759746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3e62ec3f11%3A0xbbe24f70a1d01a2e!2sRestaurant!5e0!3m2!1sen!2sus!4v1616177646666!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactPage;