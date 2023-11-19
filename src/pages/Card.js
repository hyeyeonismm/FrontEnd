import React, { useState } from 'react';
import { Grid, Button, Img, Input } from '../components';
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

function Card() {
	const [showWaste, setShowWaste] = useState(true);
	const [showDetailWaste, setShowDetailWaste] = useState(false);
	const [showCategoryWaste, setShowCategoryWaste] = useState(false);

	// 예시 데이터
	const userName = '하린';
	const month = '11';
	const money = '111,111';
	const cardName = '신한카드 Deep Dream Platinum+';

	const name = `${userName}님`;
	const wasteMonth = `${month}월`;

	const amount = `${money}원`;
	const card = `${cardName}`;

	const percentages = [20, 30, 50];
	const category = ['식비', '패션/쇼핑', '의료/건강', '전기/전자', '금융', '생활', '문화/여가', '교통', '교육'];
	const categoryImg = [
		category1,
		category2,
		category3,
		category4,
		category5,
		category6,
		category7,
		category8,
		category9,
	];
	const categoryWaste = ['500', '800', '700', '600', '500', '500', '500', '500', '500'];

	const wasteShop = ['500', '800', '700', '600', '500', '500', '500', '500', '500'];
	const wasteAmount = ['500', '800', '700', '600', '500', '500', '500', '500', '500'];

	const handleDetailBtnClick = () => {
		setShowDetailWaste(true);
		setShowWaste(false);
	};

	const handleWasteBtnClick = () => {
		setShowCategoryWaste(true);
		setShowWaste(false);
	};

	return (
		<>
			{/* Header */}
			<TopNav />

			{/* 소비&카드 창 */}
			{showWaste && (
				<>
					{/* 달 별 소비 */}
					<Grid theme='cardDescription'>
						{name}의 {wasteMonth} 소비
					</Grid>
					<Grid theme='cardConsumption'>
						<Button>
							<Img theme='arrowBefore' src={arrowBefore} alt='arrowBefore' />
						</Button>
						<Grid theme='cardAmount'>{amount}</Grid>
						<Button theme='detailBtn' onClick={handleDetailBtnClick} children='상세보기' />
						<Button>
							<Img theme='arrowAfter' src={arrowAfter} alt='arrowAfter' />
						</Button>
					</Grid>
					<Grid theme='smallLine' />
					{/* 보유 카드 */}
					<Grid theme='cardDescription'>보유 카드</Grid>
					<Grid theme='cardDescriptionSmall'>{card}</Grid>
					<Img theme='cardShinhanDD' src={cardShinhanDD} alt='cardShinhanDD' />
				</>
			)}

			{/* 상세보기 버튼 클릭 시에 카테고리 소비창 */}
			{showDetailWaste && (
				<>
					<Grid theme='cardDetailWrap'>
						<Button>
							<Img theme='arrowBeforeDetail' src={arrowBefore} alt='arrowBeforeDetail' />
						</Button>
						<Grid theme='cardDetailDescription'>{wasteMonth} 소비</Grid>
						<Button>
							<Img theme='arrowAfterDetail' src={arrowAfter} alt='arrowAfterDetail' />
						</Button>
					</Grid>
					<Grid theme='cardDetailDescriptionSmall'>{amount}</Grid>

					{/* 카테고리 클릭 시에 세부 내역 */}
					{showCategoryWaste ? (
						<>
							<Grid theme='cardWasteWrap'>
								{/* Display the list for each category */}
								{wasteShop.map((cat, index) => (
									<Button theme='cardWasteList' key={index}>
										<div style={cardWaste}>
											<div style={cardWasteCategory}> {cat} </div>
											<div style={cardWasteAmount}> {wasteAmount[index]}원 </div>
										</div>
									</Button>
								))}
							</Grid>
						</>
					) : (
						<>
							<WasteBar />
							<Grid theme='cardWasteWrap'>
								{/* Display the list for each category */}
								{category.map((cat, index) => (
									<Button theme='cardWasteList' key={index} onClick={handleWasteBtnClick}>
										<div style={cardWaste}>
											<Img src={categoryImg[index]} alt={cat} />
											<div style={cardWasteCategory}> {cat} </div>
											<div style={cardWasteAmount}> {categoryWaste[index]}원 </div>
										</div>
									</Button>
								))}
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
