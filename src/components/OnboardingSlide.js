import React, { Component } from "react";
import { Grid, Button, Img } from '../components';  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sol1 from "../assets/images/sol1.png";
import sol2 from "../assets/images/sol2.png";


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
              <h3>Link Stock이 뭔가요?</h3>
              <Img theme="onboardingImg" src={sol1} alt="register" />

            </div>
            <div>
              <h3>카드 내역 설명</h3>
              <Img theme="onboardingImg" src={sol2} alt="sol2" />
            </div>
            <div>
              <h3>주식 추천 설명</h3>
              <Img theme="onboardingImg" src={sol2} alt="sol2" />
            </div>
            <div>
              <h3>서비스 설명</h3>
              <Img theme="onboardingImg" src={sol2} alt="sol2" />
            </div>
        </Slider>
    );
  }
}
