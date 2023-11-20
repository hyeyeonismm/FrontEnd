import React, { useState, useEffect } from 'react';
import { Grid, Button, Img, Input } from '../components';
import axios from "axios";
import TopNav from '../components/TopNav';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import cardShinhanDD from '../assets/images/cardShinhanDD.png';
import WasteBar from '../components/WasteBar';
import category1 from '../assets/images/category1.svg';
import category2 from '../assets/images/category2.svg';
import category3 from '../assets/images/category3.svg';
import category4 from '../assets/images/category4.svg';
import category5 from '../assets/images/category5.svg';
import category6 from '../assets/images/category6.svg';
import category7 from '../assets/images/category7.svg';
import category8 from '../assets/images/category8.svg';
import category9 from '../assets/images/category9.svg';
import MonthWaste from '../components/MonthWaste';

function Card() {
	const [showWaste, setShowWaste] = useState(true);
	const [showDetailWaste, setShowDetailWaste] = useState(false);
	const [month, setMonth] = useState(11); 
	const [category, setCategory] = useState('식비');
	const [showCategoryWaste, setShowCategoryWaste] = useState(false);
	const [cardData, setCardData] = useState({
		cardType: 1,
        cardName: "신한카드 Deep Dream Platinum+"
	});
	const categoryImg = [
		category1, category2, category3, category4, category5, category6, category7, category8, category9,
	];
	const [wasteData, setWasteData] = useState({
		monthPrice: 500000,
        consumption: [{
			category: "식비",
			categoryPrice: 50000,
		},
		{
			category: "패션/쇼핑",
			categoryPrice: 50000,
		},
		{
			category: "의료/건강",
			categoryPrice: 70000,
		},
		{
			category: "전기/전자",
			categoryPrice: 80000,
		},
		{
			category: "금융",
			categoryPrice: 30000,
		},
		{
			category: "생활",
			categoryPrice: 20000,
		},
		{
			category: "문화/여가",
			categoryPrice: 10000,
		},
		{
			category: "교통",
			categoryPrice: 90000,
		},
		{
			category: "교육",
			categoryPrice: 100000,
		},
	]});;
	const [wasteDetailData, setWasteDetailData] = useState({
        categoryConsumption: [{
			shop: "꽃보다 소",
			price: 10000,
		},
		{
			shop: "더달달 아이스크림",
			price: 20000,
		},
		{
			shop: "천궁",
			price: 20000,
		},
	]});

	// 카드 정보 api
	const getCardData = async () => {
		try {
		  const token = localStorage.getItem("token");
		  const headers = {
			Authorization: `Bearer ${token}`,
		  };
	
		  const response = await axios.get(
			`${process.env.REACT_APP_SERVER_PORT}/consumption`,
			{
			  headers,
			}
		  );
		  console.log("카드 정보 api", response.data.data);
		  setCardData(response.data.data); //카드 번호, 카드 이름
		} catch (error) {
		  console.error("Error fetching data from API: ", error);
		}
	  };

	// n월 소비 내역 api
	const getWasteList = async () => {
		try {
		  const token = localStorage.getItem("token");
		  const headers = {
			Authorization: `Bearer ${token}`,
		  };
	
		  const response = await axios.get(
			`${process.env.REACT_APP_SERVER_PORT}/consumption/${month}`, //월 보내주기
			{
			  headers,
			}
		  );
		  console.log("n월 소비내역 api", response.data.data);
		  setWasteData(response.data.data); //monthPrice, consumption리스트 {category, categoryPrice}
		} catch (error) {
		  console.error("Error fetching data from API: ", error);
		}
	  };

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

	// 예시 데이터
	const userName = '김하린';

	const handleDetailBtnClick = () => {
		setShowWaste(false);
		setShowDetailWaste(true);
		setShowCategoryWaste(false);
	};

	const handleCategoryBtnClick  = (selectedCategory) => {
		setCategory(selectedCategory);
		setShowWaste(false);
		setShowDetailWaste(true);
		setShowCategoryWaste(true);
	};

	const handleArrowBeforeClick = () => {
		const updatedMonth = month - 1;
		setMonth(updatedMonth);
	};
	
	const handleArrowAfterClick = () => {
		const updatedMonth = month + 1;
		setMonth(updatedMonth);
	};

	useEffect(() => {
		getCardData();
		getWasteList();
		getDetailWasteList();
	  }, []);
	

	return (
		<>
			{/* Header */}
			<TopNav />

			{/* 소비&카드 창 */}
			{showWaste && (
				<>
					{/* 달 별 소비 */}
					<Grid theme='cardDescription'>
						{userName}의 {month}월 소비
					</Grid>
					<Grid theme='cardConsumption'>
						<Button theme='cardArrowBtn' onClick={handleArrowBeforeClick}>
							<Img theme='arrowBefore' src={arrowBefore} alt='arrowBefore' />
						</Button>
						<Grid theme='cardDetail'>
							<Grid>{wasteData.monthPrice}</Grid>
							<Button theme='detailBtn' onClick={handleDetailBtnClick} children='상세보기' />
						</Grid>
						<Button theme='cardArrowBtn' onClick={handleArrowAfterClick}>
							<Img theme='arrowAfter' src={arrowAfter} alt='arrowAfter' />
						</Button>
					</Grid>
					<Grid theme='smallLine' />
					{/* 보유 카드 */}
					<Grid theme='cardSection'>
						<Grid theme='cardDescription'>보유 카드</Grid>
						<Grid theme='cardDescriptionSmall'>{cardData.cardName}</Grid>
						<Img theme='cardShinhanDD' src={cardShinhanDD} alt='cardShinhanDD' />
					</Grid>
				</>
			)}

			{/* 상세보기 버튼 클릭 시에 카테고리 소비창 */}
			{showDetailWaste && (
        <>
          <MonthWaste wasteMonth={month} amount={wasteData.monthPrice} />

          {/* 카테고리 클릭 시에 세부 내역 */}
          {showCategoryWaste ? (
            <>
              {/* true */}
              <Grid theme='category_body'>
                <Grid theme='categoryForm'>
                  {wasteDetailData.categoryConsumption.map((categoryItem, index) => (
                    <Button theme='cardWasteList' key={index}>
                      <div style={cardWaste}>
                        <div style={cardWasteCategory}> {categoryItem.shop} </div>
                        <div style={cardWasteAmount}> {categoryItem.price}원 </div>
                      </div>
                    </Button>
                  ))}
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              {/* false */}
              <WasteBar />
              <Grid theme='category_body'>
                <Grid theme='categoryForm'>
                  {wasteData.consumption.map((categoryItem, index) => (
                    <Button theme='cardWasteList' key={index} onClick={() => handleCategoryBtnClick(categoryItem.category)}>
                      <div style={cardWaste}>
                        <Img src={categoryImg[index]} alt={categoryItem.category} />
                        <div style={cardWasteCategory}> {categoryItem.category} </div>
                        <div style={cardWasteAmount}> {categoryItem.categoryPrice}원 </div>
                      </div>
                    </Button>
                  ))}
                </Grid>
              </Grid>
            </>
          )}
        </>
      )}
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

export default Card;
