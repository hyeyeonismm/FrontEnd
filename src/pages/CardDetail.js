import React, { useState } from 'react';
import { Grid, Button, Img, Input } from '../components';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import TopNav from '../components/TopNav';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import cardShinhanDD from '../assets/images/cardShinhanDD.png';
import WasteBar from '../components/WasteBar';
import MonthWaste from '../components/MonthWaste';

function CardDetail() {
    const location = useLocation();
	const [showWaste, setShowWaste] = useState(true);
	const [showDetailWaste, setShowDetailWaste] = useState(false);
	const [month, setMonth] = useState(11); 
	const [category, setCategory] = useState('식비');
	const [showCategoryWaste, setShowCategoryWaste] = useState(false);

	const [wasteDetailData, setWasteDetailData] = useState({
        categoryConsumption: [{
			shop: "꽃보다 소",
			price: 10000,
		},
		{
			category: "더달달 아이스크림",
			price: 20000,
		},
		{
			category: "천궁",
			price: 20000,
		},
	]});

	// n월 카테고리별 세부내역 내역 api
	const getDetailWasteList = async () => {
		try {
		  const token = localStorage.getItem("token");
		  const headers = {
			Authorization: `Bearer ${token}`,
		  };
	
		  const response = await axios.get(
			`${process.env.REACT_APP_SERVER_PORT}/consumption/${month}/${category}`, //월, 카테고리 보내주기
			{
			  headers,
			}
		  );
		  console.log("n월 카테고리별 세부내역 api", response.data.data);
		  setWasteDetailData(response.data.data); //categoryConsumption리스트 {shop, price}
		} catch (error) {
		  console.error("Error fetching data from API: ", error);
		}
	  };


	return (
		<>
			{/* Header */}
			<TopNav />
            <MonthWaste wasteMonth={month} amount={wasteData.monthPrice} />
            <Grid theme='category_body'>
                <Grid theme='categoryForm'>
                {wasteDetailData.categoryConsumption.map((categoryItem, index) => (
                    <Button theme='cardWasteList' key={index} onClick={handleWasteBtnClick()}>
                        <div style={cardWaste}>
                        {/* <Img src={categoryImg[index]} alt={categoryItem.category} /> 수정 필요 */}
                        <div style={cardWasteCategory}> {categoryItem.shop} </div>
                        <div style={cardWasteAmount}> {categoryItem.price}원 </div>
                        </div>
                    </Button>
                    ))}
                </Grid>
            </Grid>

		</>
	);
}

const cardWaste = {
	display: 'flex',
	justifyContent: 'space-between',
};

const cardWasteCategory = {
	padding: '15px',
	width: '140px',
	textAlign: 'left',
	color: 'black',
};

const cardWasteAmount = {
	width: '70px',
	height: '25px',
	margin: '15px',
	textAlign: 'center',
	color: 'grey',
	// backgroundColor: '#EBF3FC',
	borderRadius: '5px',
};

export default CardDetail;
