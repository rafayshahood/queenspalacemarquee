import { useState } from "react";
import "./Styles/SlideShow.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="SliderComponentStyles"> 
        <div className="sliderStyles">
            <div>
                <div onClick={goToPrevious} className="leftArrowStyles">
                ❰
                </div>
                <div onClick={goToNext} className="rightArrowStyles">
                ❱
                </div>
            </div>

            <div className="slideStyles">
                <img src={slides[currentIndex].url} alt="Catering" />
                <p className="captionStyles">{slides[currentIndex].caption}</p>
            </div>

            <div className="thumbnailContainer">
                {slides.map((slide, slideIndex) => (
                <img
                    className={`thumbnailStyle ${
                    slideIndex === currentIndex ? "active" : ""
                    }`}
                    src={slide.url}
                    alt="Thumbnail"
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                />
                ))}
            </div>
        </div>
    </div>
  );
};

export default ImageSlider;
