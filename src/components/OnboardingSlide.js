import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import register from "../images/mainSol.png";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        
        <Slider {...settings}>
          <div>
            <h3>하하하하</h3>
            <img style={{display: "block", margin: "20%"}} src={register} alt="register" />
          </div>
          <div>
            <h3>2</h3>
            <img style={{display: "block", margin: "20%"}} src={register} alt="register" />
          </div>
          <div>
            <h3>3</h3>
            <img style={{display: "block", margin: "20%"}} src={register} alt="register" />
          </div>
          <div>
            <h3>4</h3>
            <img style={{display: "block", margin: "20%"}} src={register} alt="register" />
          </div>
        </Slider>
    );
  }
}