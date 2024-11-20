import React from 'react';
import './Accueil.css'; // You will create this CSS file later

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="background-image">
        <div className="overlay">
          <h1>Welcome to John Doe's Portfolio</h1>
          <h2>Web Developer</h2>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
