import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import { Grid, Button, Img } from '../components';
import instance from '../api/axios';

const MonthWaste = ({ wasteMonth, wasteAmount}) => {
	return (
		<>
			<Grid theme='cardDetailWrap'>
				<Grid theme='cardDetailDescription'>{wasteMonth}월 소비</Grid>
			</Grid>
			<Grid theme='cardDetailDescriptionSmall'>{wasteAmount}</Grid>
		</>
	);
};

export default MonthWaste;
