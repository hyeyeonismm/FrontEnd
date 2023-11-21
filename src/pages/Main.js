import OnboardingSlide from '../components/OnboardingSlide';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Button } from '../components';
import instance from '../api/axios'

function Main() {
	const navigate = useNavigate();

	const handleButtonClick = async () => {
		try {
		  const cardData = await getCardData();
		  console.log(cardData);
		  navigate('/card', { state: { cardData } });
		} catch (error) {
		  console.error('Error handling button click: ', error);
		}
	  };
	  
	// 카드 정보 api
	const getCardData = async () => {
	try {
		const token = localStorage.getItem('token');
		const headers = {
		Authorization: `Bearer ${token}`,
		};
	
		const response = await instance.get('/card', {
		headers,
		});
		console.log('카드 정보 api', response.data.data);
		localStorage.setItem("cardSeq", response.data.data.cardSeq)
		localStorage.setItem("cardName", response.data.data.cardName)
		return response.data.data; 
	} catch (error) {
		console.error('Error fetching data from API: ', error);
		throw error;
	}};

	const onClickLogo = () => {
		navigate('/');
	};


	return (
		<>
			<div style={onboardingWrap}>
				<Grid theme='headerMain'>
					<Button theme='headerTitle' onClick={onClickLogo} children='Link Stock' />
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

export default Main;
