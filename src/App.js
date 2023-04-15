import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageSlider from "./SlideShow";

import frontDesk from './images/frontDesk.JPG'
import catering from './images/Chairs.JPG'
import trustdanceFloor from './images/trust&danceFloor.JPG'
import stageDecor from './images/stageDecor.JPG'




function App() {

  const images = [frontDesk,stageDecor,trustdanceFloor];

  const data = [
    {
      image: frontDesk,
      caption: "San Francisco"
    },
    {
      image: stageDecor,
      caption: "Scotland"
    },
    {
      image: trustdanceFloor,
      caption: "Darjeeling"
    },
  ];

  const slides = [
    { url: frontDesk, title: "beach" },
    { url: catering, title: "boat" },
    { url: trustdanceFloor, title: "forest" },
    { url: catering, title: "city" },
    { url: trustdanceFloor, title: "italy" },
  ];
  const containerStyles = {
    width: "80%",
    height: "500px",
    margin: "0 auto",
  };

  return (
    <div className="App">
    <div className="landing-page">
      <div className="header">
        <h1>Queen's Palace Marquee</h1>
        <p>Make your special day unforgettable</p>
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
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
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;
