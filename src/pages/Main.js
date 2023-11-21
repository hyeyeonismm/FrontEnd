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
		return response.data.data; // 데이터를 반환
	} catch (error) {
		console.error('Error fetching data from API: ', error);
		throw error; // 에러를 다시 throw하여 상위 함수에게 전달
	}
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

export default Main;
