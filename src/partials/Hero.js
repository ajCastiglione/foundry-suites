import React, { Component } from "react";
import Slider from "react-slick";

export default class Hero extends Component {
  state = {
    images: [
      "https://foundrysuites.s3.amazonaws.com/IMG_5052.jpg",
      "https://foundrysuites.s3.amazonaws.com/IMG_5055.jpg"
    ]
  };

  render() {
    let slides = this.state.images;
    let settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="hero">
        <Slider {...settings} className="slider">
          {slides.map((el, id) => (
            <li key={id}>
              <img src={el} alt="Slide" />
            </li>
          ))}
        </Slider>
      </div>
    );
  }
}
