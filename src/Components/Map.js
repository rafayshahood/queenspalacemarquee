import React from 'react';
import './Styles/Map.css'


function Map() {
  return (
  <div className="map-section">
  <h2>Location</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2218407528226!2d73.18252437558823!3d31.463083149970235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226f17cf343df1%3A0x225bd1b483585c36!2sQueens%E2%80%99s%20Palace%20Marquee!5e0!3m2!1sen!2s!4v1681618221794!5m2!1sen!2s"
  style={{border: "0"}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  </div>
  );
}

export default Map;