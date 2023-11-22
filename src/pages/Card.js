import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Button, Img } from '../components';
import { categoryImages } from '../components/Card/constants';
import instance from '../api/axios';
import TopNav from '../components/TopNav/TopNav';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import cardShinhanDD from '../assets/images/cardShinhanDD.png';
import cardShinhanBom from '../assets/images/cardShinhanBom.png';
import cardShinhanDO from '../assets/images/cardShinhanDO.png';
import WasteBar from '../components/Card/WasteBar';
import MonthWaste from '../components/Card/MonthWaste';
import mainCharacter from '../assets/images/mainCharacter.png';
import Footer from '../components/Footer/Footer';

function Card() {
	const navigate = useNavigate();
	const location = useLocation();
	const cardData = location.state?.cardData;
	const [showWaste, setShowWaste] = useState(true);
	const [showDetailWaste, setShowDetailWaste] = useState(false);
	const [month, setMonth] = useState('11');
	const [category, setCategory] = useState('식비');
	const [showCategoryWaste, setShowCategoryWaste] = useState(false);
	const [wasteData, setWasteData] = useState("");
	const [wasteDetailData, setWasteDetailData] = useState("");
	const userName = localStorage.getItem('userName');
	const cardSeq = localStorage.getItem('cardSeq');
	const cardName = localStorage.getItem('cardName');

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

	// n월 소비 내역 api
	const getWasteList = async (selectedMonth) => {
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const response = await instance.get(
				`${process.env.REACT_APP_SERVER_PORT}/card/${cardSeq}/consumption/${selectedMonth}`, //월 보내주기
				{
					headers,
				},
			);
			console.log(`${selectedMonth}월 소비내역 api`, response.data.data);
			
			setWasteData(response.data.data);
		} catch (error) {
			console.error('Error fetching data from API: ', error);
		}
	};

	// n월 카테고리별 세부내역 내역 api
	const getDetailWasteList = async (selectedMonth, category) => {
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const response = await instance.get(
				`${process.env.REACT_APP_SERVER_PORT}/card/${cardSeq}/consumption/${selectedMonth}/${category}`, //월, 카테고리 보내주기
				{
					headers,
				},
			);
			console.log(`${selectedMonth}월 ${category} 세부내역 api`, response.data.data);
			setWasteDetailData(response.data.data);
		} catch (error) {
			console.error('Error fetching data from API: ', error);
		}
	};

	// 이전 달
	const handleArrowBeforeClick = () => {
		const updatedMonth = Math.max(1, month - 1);
		setMonth(updatedMonth);
		getWasteList(updatedMonth);
		getDetailWasteList(updatedMonth, category);
		};
		

	// 다음 달
	const handleArrowAfterClick = () => {
		const updatedMonth = Math.min(11, month + 1);
		setMonth(updatedMonth);
		getWasteList(updatedMonth);
		getDetailWasteList(updatedMonth, category);
	};

	// 상세보기 버튼 클릭
	const handleDetailBtnClick = () => {
		setShowWaste(false);
		setShowDetailWaste(true);
		setShowCategoryWaste(false);
		getWasteList(month)
	};

	// 카테고리 버튼 클릭
	const handleCategoryBtnClick = (selectedCategory) => {
		setCategory(selectedCategory);
		setShowWaste(false);
		setShowDetailWaste(true);
		setShowCategoryWaste(true);
		getDetailWasteList(month, selectedCategory);
	};

	// 뒤로가기 버튼 클릭 시의 동작
	const handleBackButtonClick = () => {
		setShowWaste(true);
		setShowDetailWaste(false);
		setShowCategoryWaste(false);
	};

	const onClickStock = () => {
		navigate('/stock');
	};

	useEffect(() => {
		getWasteList(month)
	}, []);


	const monthPrice = Number(wasteData.monthPrice).toLocaleString();

	return (
		<>
			{/* 헤더 */}
			<TopNav onBackButtonClick={handleBackButtonClick} />
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
							
							<Grid theme="monthPrice">{monthPrice}원</Grid>
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
						<Grid theme='cardDescriptionSmall'>{cardName}</Grid>
						<Img theme='cardShinhanDD' src={getCardImage(cardName)} alt='cardShinhanDD' />
					</Grid>
				</>
			)}

			{/* 상세보기 버튼 클릭 시에 카테고리 소비창 */}
			{showDetailWaste && (
				<>
					<MonthWaste
						wasteMonth={month}
						wasteAmount={monthPrice}
					/>

					{/* 카테고리 클릭 시에 세부 내역 */}
					{showCategoryWaste ? (
						<>
							{/* 소비 세부 내역 */}
							<Grid theme='list_icon'> 
								<Img theme='list_icon' src={mapCategoryToImage(category)} alt={category} />
							</Grid>
							<Grid theme='list_grid'>
								<Grid theme='cardCategory'>{category}</Grid>
							</Grid>

							<Grid theme='category_body'>
								<Grid theme='categoryForm'>
									<Grid theme='stock_list'>
										{wasteDetailData && wasteDetailData.categoryConsumption
										.map((categoryItem, index) => (
											<Button theme='cardWasteList' key={index}>
												<div style={cardWaste}>
													<div style={cardWasteCategory}> {categoryItem.shop} </div>
													<div style={cardWasteAmount}> {Number(categoryItem.price).toLocaleString()}원 </div>
												</div>
											</Button>
										))}
									</Grid>
								</Grid>
							</Grid>
						</>
					) : (
						<>
							{/* 카테고리별 소비 내역 */}
							<WasteBar data={wasteData} />
							<Grid theme='category_body'>
								<Grid theme='categoryForm'>
								{wasteData && wasteData.consumption
									.sort((a, b) => b.categoryPrice - a.categoryPrice)
									.map(
										(categoryItem, index) => (
										localStorage.setItem(`category${index}`, JSON.stringify(categoryItem.category)),
										(
											<Button theme='cardWasteList' key={index} onClick={() => handleCategoryBtnClick(categoryItem.category)}>
											<div style={cardWaste}>
												<Img src={mapCategoryToImage(categoryItem.category)} alt={categoryItem.category} />
												<div style={cardWasteCategory}> {categoryItem.category} </div>
												<div style={cardWasteAmount}> {Number(categoryItem.categoryPrice).toLocaleString()}원 </div>
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
			<Footer />
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
