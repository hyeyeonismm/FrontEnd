import React, { useState } from 'react';
import Slider from 'react-slick';
import OnboardingSlide from '../components/OnboardingSlide';
import { useNavigate } from 'react-router-dom';
import { TextField, styled } from '@mui/material';
import { Grid, Button, Img } from '../components';

function Onboarding() {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/login');
	};

	return (
		<>
			<div style={onboardingWrap}>
				<Grid theme='header'>
					<div style={{ marginLeft: '45px', justifyContent: 'center', flex: 1 }}>
						<Grid theme='headerTitle'>Link Stock</Grid>
					</div>
				</Grid>

				<Grid theme='onboardingSlide'>
					<OnboardingSlide />
				</Grid>

				<Grid theme='onboardingButton'>
					<Button theme='startBtn' onClick={handleButtonClick}>
						시작하기
					</Button>
				</Grid>
			</div>
		</>
	);
}

const onboardingWrap = {
	height: '100%',
};

export default Onboarding;
