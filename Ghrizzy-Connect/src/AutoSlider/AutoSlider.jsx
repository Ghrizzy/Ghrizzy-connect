import React, { useRef } from "react";
import Slider from "react-slick";
import { GrLocationPin } from "react-icons/gr";
import { ImPriceTag } from "react-icons/im";
import "./autoslider.css";

const AutoSlider = ({ Eventinfo }) => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    console.log("no");
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const tablet_settings = {
    // dots: true,
    infinite: true,
    speed: 9000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
   const desktop_settings = {
     // dots: true,
     infinite: true,
     speed: 9000,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1000,
   };

  return (
    <div className="carousel">
      <div className="carousel-image">
        <Slider ref={sliderRef} {...settings}>
          {Eventinfo.map((slide, index) => (
            <div key={index}>
              <div className="image-div">
                <img src={slide.image} alt={slide.altText} />
                <div className="date">
                  <p>
                    12th <br /> oct
                  </p>
                </div>
              </div>
              <div className="event-info">
                <div className="event-info-container">
                  <p className="event-title">{slide.title}</p>
                  <p className="event-location">
                    <GrLocationPin />
                    {slide.location}
                  </p>
                  <p className="event-price">
                    <ImPriceTag />
                    starts at <b>{slide.price}</b>
                  </p>
                  <button>Buy Ticket</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="tablet-carousel-image">
        <Slider ref={sliderRef} {...tablet_settings}>
          {Eventinfo.map((slide, index) => (
            <div key={index}>
              <div className="image-div">
                <img src={slide.image} alt={slide.altText} />
                <div className="date">
                  <p>
                    12th <br /> oct
                  </p>
                </div>
              </div>
              <div className="event-info">
                <div className="event-info-container">
                  <p className="event-title">{slide.title}</p>
                  <p className="event-location">
                    <GrLocationPin />
                    {slide.location}
                  </p>
                  <p className="event-price">
                    <ImPriceTag />
                    starts at <b>{slide.price}</b>
                  </p>
                  <button>Buy Ticket</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="desktop-carousel-image">
        <Slider ref={sliderRef} {...desktop_settings}>
          {Eventinfo.map((slide, index) => (
            <div key={index}>
              <div className="image-div">
                <img src={slide.image} alt={slide.altText} />
                <div className="date">
                  <p>
                    12th <br /> oct
                  </p>
                </div>
              </div>
              <div className="event-info">
                <div className="event-info-container">
                  <p className="event-title">{slide.title}</p>
                  <p className="event-location">
                    <GrLocationPin />
                    {slide.location}
                  </p>
                  <p className="event-price">
                    <ImPriceTag />
                    starts at <b>{slide.price}</b>
                  </p>
                  <button>Buy Ticket</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <button onClick={previous} className="carousel-button-prev">
        &#10094;
      </button>
      <button onClick={next} className="carousel-button-next">
        &#10095;
      </button> */}
    </div>
  );
};

export default AutoSlider;
