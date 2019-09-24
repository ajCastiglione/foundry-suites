import React, { Component } from "react";
import Slider from "react-slick";

export default class Hero extends Component {
  state = {
    images: [
      "https://r-fa.bstatic.com/xdata/images/xphoto/1920x810/33040141.jpg?k=b8b3f824d48bb79d17368d68917454ca1f8d1d42a244d6be79d104e3c39ce2fc&o=",
      "https://r-fa.bstatic.com/xdata/images/xphoto/1920x810/59729133.jpg?k=7f9f88588dbcd8678e822a9e4617f45e344bb7ed26520c3778e9dd1145c62e1e&o=",
      "https://q-fa.bstatic.com/xdata/images/xphoto/1920x810/33040144.jpg?k=8f5809b27ad16d5ccb009ee0fad2771fb90f3033561622522baa5728436b36bb&o=",
      "https://r-fa.bstatic.com/xdata/images/xphoto/1920x810/52079455.jpg?k=fc65ca0bdeff1771890a97b1c74dc54d62f2023a1c5185652118d5b7bca7f98f&o="
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
