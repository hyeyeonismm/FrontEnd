import React, { Component } from 'react';
import { Grid, Button, Img } from '../components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sol2 from '../assets/images/sol2.png';
import sol3 from '../assets/images/sol3.png';
import sol4 from '../assets/images/sol4.png';
import sol5 from '../assets/images/sol5.png';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<Slider {...settings}>
				<div>
					<h3 style={Toptxt}>Link Stock이 뭔가요?</h3>
					<div>
						<Img theme='onboardingImg' src={sol2} alt='register' />
						<p>그것은 ~~~~~~~~~~~~~~~ 이야~~~~~~</p>
					</div>
				</div>
				<div>
					<h3 style={Toptxt}>카드 내역 설명</h3>
					<div>
						<Img theme='onboardingImg' src={sol3} alt='register' />
						<p>그것은 ~~~~~~~~~~~~~~~ 이야~~~~~~</p>
					</div>
				</div>
				<div>
					<h3 style={Toptxt}>주식 추천 설명</h3>
					<div>
						<Img theme='onboardingImg' src={sol4} alt='register' />
						<p>그것은 ~~~~~~~~~~~~~~~ 이야~~~~~~</p>
					</div>
				</div>
				<div>
					<h3 style={Toptxt}>서비스 설명</h3>
					<div>
						<Img theme='onboardingImg' src={sol5} alt='register' />
						<p>그것은 ~~~~~~~~~~~~~~~ 이야~~~~~~</p>
					</div>
				</div>
			</Slider>
		);
	}
}

const Toptxt = {
	margin: '20px',
};
