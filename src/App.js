import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="landing-page">
      <div className="header">
        <h1>Queen's Palace Marquee</h1>
        <p>Make your special day unforgettable</p>
      </div>
      <div className="hero-image">
        <img src="./wedding-hall.jpg" alt="Wedding Hall" />
      </div>
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src="./catering.jpg" alt="Catering" />
            <h3>Catering</h3>
            <p>We offer a variety of customizable catering options to fit your needs and preferences.</p>
          </div>
          <div className="service-card">
            <img src="./decorations.jpg" alt="Decorations" />
            <h3>Decorations</h3>
            <p>We have an expert team of decorators who will create a beautiful and elegant ambiance for your wedding.</p>
          </div>
          <div className="service-card">
            <img src="./photography.jpg" alt="Photography" />
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
