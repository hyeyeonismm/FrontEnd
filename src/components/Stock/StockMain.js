import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Img, Button } from '../index.js';
import Character from '../../assets/images/character.png';
import TopNav from '../TopNav.js';

function StockMain() {
	const navigate = useNavigate();
	const onClickCheck = () => {
		navigate('/stock/category');
	};

	return (
		<>
			<TopNav />
			<Grid theme='stockMain_body'>
				<Grid>소비자에서 주주가 되어봅시다.</Grid>
				<Grid>
					ㅇㅇㅇ님과 <strong>밀접한 종목</strong>을 알아볼까요?
				</Grid>
			</Grid>
			<Grid theme='stockMain_content'>
				<Grid theme='stockMain_circle'>
					<Img theme='character' src={Character} alt='character'></Img>
				</Grid>
				<Button theme='checkBtn' onClick={onClickCheck} children='확인하기' />
			</Grid>
		</>
	);
}
export default StockMain;
