import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import { Grid, Button, Img } from '../components';
import instance from '../api/axios';

const MonthWaste = ({ wasteMonth, wasteAmount}) => {
	// const [month, setMonth] = useState(wasteMonth);
	// const [month, setMonth] = useState(wasteMonth);
	// const [category, setCategory] = useState(wasteCategory);

	// useEffect(() => {
	// 	// 컴포넌트가 마운트되거나 월이 변경될 때마다 데이터를 가져옴
	// 	getWasteList(month);
	// 	getDetailWasteList(month, category);
	// }, [getWasteList, getDetailWasteList, month, category]);

	// const handleArrowBeforeClick = () => {
	// 	const updatedMonth = month - 1;
	// 	if (updatedMonth >= 1) {
	// 		setMonth(updatedMonth);
	// 	}
	// };

	// const handleArrowAfterClick = () => {
	// 	const updatedMonth = month + 1;
	// 	if (updatedMonth <= 12) {
	// 		setMonth(updatedMonth);
	// 	}
	// };

	return (
		<>
			<Grid theme='cardDetailWrap'>
				{/* <Button onClick={handleArrowBeforeClick}>
					<Img theme='arrowBeforeDetail' src={arrowBefore} alt='arrowBeforeDetail' />
				</Button> */}
				<Grid theme='cardDetailDescription'>{wasteMonth}월 소비</Grid>
				{/* <Button onClick={handleArrowAfterClick}>
					<Img theme='arrowAfterDetail' src={arrowAfter} alt='arrowAfterDetail' />
				</Button> */}
			</Grid>
			<Grid theme='cardDetailDescriptionSmall'>{wasteAmount}</Grid>
		</>
	);
};

export default MonthWaste;
