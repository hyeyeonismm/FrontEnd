import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Img, Input } from '../components';
import { categoryImages, getCategoryColor } from '../components/constants';
import axios from 'axios';
import TopNav from '../components/TopNav';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import cardShinhanDD from '../assets/images/cardShinhanDD.png';
import cardShinhanBom from '../assets/images/cardShinhanBom.png';
import cardShinhanDO from '../assets/images/cardShinhanDO.png';
import WasteBar from '../components/WasteBar';
import MonthWaste from '../components/MonthWaste';
import mainCharacter from '../assets/images/mainCharacter.png';

function Card() {
	const navigate = useNavigate();
	const [showWaste, setShowWaste] = useState(true);
	const [showDetailWaste, setShowDetailWaste] = useState(false);
	const [month, setMonth] = useState(11);
	const [category, setCategory] = useState('식비');
	const [showCategoryWaste, setShowCategoryWaste] = useState(false);
	const userName = localStorage.getItem('userName');
	const [cardData, setCardData] = useState({
		cardType: 1,
		cardName: '신한카드 Deep Dream Platinum+',
		cardSeq:1
	});

	const [wasteData, setWasteData] = useState({
		monthPrice: 510000,
		consumption: [
			{
				category: '식비',
				categoryPrice: 50000,
			},
			{
				category: '패션/쇼핑',
				categoryPrice: 50000,
			},
			{
				category: '의료/건강',
				categoryPrice: 70000,
			},
			{
				category: '전기/전자',
				categoryPrice: 80000,
			},
			{
				category: '금융',
				categoryPrice: 30000,
			},
			{
				category: '생활',
				categoryPrice: 20000,
			},
			{
				category: '문화/여가',
				categoryPrice: 10000,
			},
			{
				category: '교통',
				categoryPrice: 90000,
			},
			{
				category: '교육',
				categoryPrice: 100000,
			},
			{
				category: '여행/숙박',
				categoryPrice: 10000,
			},
		],
	});
	const [wasteDetailData, setWasteDetailData] = useState({
		categoryConsumption: [
			{
				shop: '꽃보다 소',
				price: 10000,
			},
			{
				shop: '더달달 아이스크림',
				price: 20000,
			},
			{
				shop: '천궁',
				price: 20000,
			},
		],
	});

	// 카테고리 이미지 매핑
	const mapCategoryToImage = (category) => {
		return categoryImages[category] || null;
	};

	// 카드 이미지 매핑
	const getCardImage = (cardName) => {
		switch (cardName) {
		  case '신한카드 Deep Dream Platinum+':
			return cardShinhanDD;
		  case '신한카드 봄':
			return cardShinhanBom;
		  case '신한카드 Deep Oil':
			return cardShinhanDO;
		  default:
			return cardShinhanDD;
		}
	  };

	// 카드 정보 api
	const getCardData = async () => {
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const response = await axios.get(`${process.env.REACT_APP_SERVER_PORT}/card`, {
				headers,
			});
			console.log('카드 정보 api', response.data.data);
			setCardData(response.data.data); 
		} catch (error) {
			console.error('Error fetching data from API: ', error);
		}
	};

	// n월 소비 내역 api
	const getWasteList = async (selectedMonth) => {
		try {
		  const token = localStorage.getItem("token");
		  const headers = {
			Authorization: `Bearer ${token}`,
		  };
	
		  const response = await axios.get(
			`${process.env.REACT_APP_SERVER_PORT}/card/${cardData.cardSeq}/consumption/${selectedMonth}`, //월 보내주기
			{
			  headers,
			}
		  );
		  console.log(`${selectedMonth}월 소비내역 api`, response.data.data);
		  setWasteData(response.data.data); //monthPrice, consumption리스트 {category, categoryPrice}
		} catch (error) {
			console.error('Error fetching data from API: ', error);
		}
	};

	// n월 카테고리별 세부내역 내역 api
	const getDetailWasteList = async (selectedMonth, selectedCategory) => {
		try {
		  const token = localStorage.getItem("token");
		  const headers = {
			Authorization: `Bearer ${token}`,
		  };
	
		  const response = await axios.get(
			`${process.env.REACT_APP_SERVER_PORT}/card/${cardData.cardSeq}/consumption/${selectedMonth}/${selectedCategory}`, //월, 카테고리 보내주기
			{
			  headers,
			}
		  );
		  console.log(`${selectedMonth}월 ${selectedCategory} 세부내역 api`, response.data.data);
		  setWasteDetailData(response.data.data); //categoryConsumption리스트 {shop, price}
		} catch (error) {
			console.error('Error fetching data from API: ', error);
		}
	};

	// 상세보기 버튼 클릭
	const handleDetailBtnClick = () => {
		setShowWaste(false);
		setShowDetailWaste(true);
		setShowCategoryWaste(false);
	};

	// 카테고리 버튼 클릭
	const handleCategoryBtnClick = (selectedCategory) => {
		setCategory(selectedCategory);
		setShowWaste(false);
		setShowDetailWaste(true);
		setShowCategoryWaste(true);
	};

	// 이전 달
	const handleArrowBeforeClick = () => {
		const updatedMonth = month - 1;
		if (updatedMonth >= 1) {
		  setMonth(updatedMonth);
		  getWasteList(updatedMonth);
		  getDetailWasteList(updatedMonth, category);
		}
	};

	// 다음 달
	const handleArrowAfterClick = () => {
		const updatedMonth = month + 1;
		if (updatedMonth <= 12) {
		  setMonth(updatedMonth);
		  getWasteList(updatedMonth);
		  getDetailWasteList(updatedMonth, category);
		}
	};

	const onClickStock = () => {
		navigate('/stock');
	};

	// 뒤로가기 버튼 클릭 시의 동작
	const handleBackButtonClick = () => {
		setShowWaste(true);
		setShowDetailWaste(false);
		setShowCategoryWaste(false);
	  };


	useEffect(() => {
		getCardData();
		getWasteList(month);
		getDetailWasteList(month, category);
	}, [month, category]); 

	localStorage.setItem('cardName', cardData.cardName)

	return (
		<>
			{/* Header */}
			<TopNav onBackButtonClick={handleBackButtonClick}  />
			<Grid theme='topNavGrid'>
				<Button theme='selectedBtn'>
					<Img theme='mainCharacter' src={mainCharacter} alt='mainCharacter' />
					<Grid>내 소비</Grid>
				</Button>

				<Button theme='topNavBtn' onClick={onClickStock}>
					<Grid>주주되기</Grid>
				</Button>
			</Grid>
			<Grid theme='topNavLine' />
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
							<Grid>{wasteData.monthPrice}원</Grid>
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
						<Img theme='cardShinhanDD' src={getCardImage(cardData.cardName)} alt='cardShinhanDD' />
					</Grid>
				</>
			)}

			{/* 상세보기 버튼 클릭 시에 카테고리 소비창 */}
			{showDetailWaste && (
				<>
					<MonthWaste
                        wasteMonth={month}
                        amount={wasteData.monthPrice}
                        wasteCategory={category} 
                        getWasteList={getWasteList}
                        getDetailWasteList={getDetailWasteList}
                    />

					{/* 카테고리 클릭 시에 세부 내역 */}
					{showCategoryWaste ? (
						<>
							{/* 소비 세부 내역 */}
							<Grid>{category}</Grid>
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
							{/* 카테고리별 소비 내역 */}
							<WasteBar data={wasteData} />
							<Grid theme='category_body'>
								<Grid theme='categoryForm'>
									{wasteData.consumption
										.sort((a, b) => b.categoryPrice - a.categoryPrice)
										.map(
											(categoryItem, index) => (
												localStorage.setItem(`category${index}`, JSON.stringify(categoryItem.category)),
												(
													<Button theme='cardWasteList' key={index} onClick={() => handleCategoryBtnClick(categoryItem.category)}>
														<div style={cardWaste}>
															<Img src={mapCategoryToImage(categoryItem.category)} alt={categoryItem.category} />
															<div style={cardWasteCategory}> {categoryItem.category} </div>
															<div style={cardWasteAmount}> {categoryItem.categoryPrice}원 </div>
														</div>
													</Button>
												)
											),
										)}
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
