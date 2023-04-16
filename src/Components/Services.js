import React from 'react';
import './Styles/Services.css'
import images from '../imagesUrl.js';
const { frontDesk, catering, trustdanceFloor, stageDecor, coopEventHallDecor, coopEventLobbyDecor, sweetBar, frontPic, frontPic2, stageDecor2 } = images;



function Services() {
  return (
    <div className="services-section">
    <h2>Our Services</h2>
    <div className="services-container">
    <div className="service-card">
        <img src={catering} alt="Catering" />
        <h3>Catering</h3>
        <p>We offer a variety of customizable catering options to fit your needs and preferences.</p>
    </div>
    <div className="service-card">
        <img src={stageDecor}alt="Decorations" />
        <h3>Decorations</h3>
        <p>We have an expert team of decorators who will create a beautiful and elegant ambiance for your wedding.</p>
    </div>
    <div className="service-card">
        <img src={trustdanceFloor} alt="Photography" />
        <h3>Photography</h3>
        <p>Our professional photographers will capture your special moments and create timeless memories.</p>
    </div>
    </div>
</div>
  );
}

export default Services;
