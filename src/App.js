import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageSlider from "./Components/SlideShow";
import Map from './Components/Map'
import images from './imagesUrl.js';
import Header from './Components/Header';
import Footer from './Components/Footer'
import OpenGraph from './Components/OpenGraph';
import Services from './Components/Services';
const { frontDesk, catering, trustdanceFloor, stageDecor, coopEventHallDecor, coopEventLobbyDecor, sweetBar, frontPic, frontPic2, stageDecor2 } = images;



function App() {

  const images = [frontDesk,stageDecor,trustdanceFloor];

  const sliderImages = [
    {
      url: coopEventLobbyDecor,
      caption: `"Welcome to Queen's Palace Marquee - Where Your Dream Wedding Comes to Life"`
    },
    {
      url: coopEventHallDecor,
      caption: `"Cooperate Event @QueensPalaceMarquee"`
    },
    {
      url: trustdanceFloor,
      caption: `"Walima Event @QueensPalaceMarquee"`
    },
    {
      url: frontPic2,
      caption: `"A stunning entrance to your dream wedding at Queen's Palace Marquee."`
    },
    {
      url: sweetBar,
      caption: `"Sweet Bar (optional)"`
    },
    {
      url: stageDecor,
      caption: `"Transform your wedding venue into a fairy tale setting with our exquisite stage decorations."`
    },
    {
      url: stageDecor2,
      caption: `"Set the stage for your special day with our expert team of decorators and beautiful decorations."`
    },
    {
      url: catering,
      caption: `"Our customizable catering options ensure that every guest's taste buds are satisfied!"`
    },
  ];


  return (
    
    <div className="App">
      <OpenGraph img={frontDesk}/>
      <Header/>
      <ImageSlider slides={sliderImages} />
      <Services/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
