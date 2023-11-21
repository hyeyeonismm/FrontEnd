import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Img, Button } from '../index';
import StockTopNav from './StockTopNav';
import axios from 'axios';
import { categoryImages, getCategoryColor } from '../constants';

function StockCategory() {
	const navigate = useNavigate();
	const [showCategory, setShowCategory] = useState(true);
	const [showStockList, setShowStockList] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedTab, setSelectedTab] = useState('수익률');
	const userName = localStorage.getItem('userName');
	const [stockEarningData, setStockEarningData] = useState([
		{
			stockName: "에이치피오",
			stockRange: "9.03",
			stockClose: "7730",
			stockCode: "357230"
		},
		{
			stockName: "에이치피오",
			stockRange: "9.03",
			stockClose: "7730",
			stockCode: "357230"
		},
		{
			stockName: "에이치피오",
			stockRange: "9.03",
			stockClose: "7730",
			stockCode: "357230"
		},
		{
			stockName: "에이치피오",
			stockRange: "9.03",
			stockClose: "7730",
			stockCode: "357230"
		},
		{
			stockName: "에이치피오",
			stockRange: "9.03",
			stockClose: "7730",
			stockCode: "357230"
		},
		{
			stockName: "에이치피오",
			stockRange: "9.03",
			stockClose: "7730",
			stockCode: "357230"
		},
		{
			stockName: "에이치피오",
			stockRange: "9.03",
			stockClose: "7730",
			stockCode: "357230"
		},
	]);
	const [stockCapData, setStocCapData] = useState([
		{
			marketCap: '992303484480',
			stockName: '오리온홀딩스',
			stockCode: '001800',
		},
		{
			marketCap: '992303484480',
			stockName: '오리온홀딩스',
			stockCode: '001800',
		},
		{
			marketCap: '992303484480',
			stockName: '오리온홀딩스',
			stockCode: '001800',
		},
		{
			marketCap: '992303484480',
			stockName: '오리온홀딩스',
			stockCode: '001800',
		},
		{
			marketCap: '992303484480',
			stockName: '오리온홀딩스',
			stockCode: '001800',
		},
		{
			marketCap: '992303484480',
			stockName: '오리온홀딩스',
			stockCode: '001800',
		},
	]);

	const onClickCategory = (category) => {
		setSelectedCategory(category);
		setShowStockList(true);
		setShowCategory(false);
	};

	const onClickStock = (stock) => {
		navigate('/stock/information', { state: { stockName: stock.stockName } });
	};

	// 카테고리 이름, 이미지 매핑
	const mapCategoryToImage = (category) => categoryImages[category] || null;

	const categoryData = Array.from({ length: 5 }, (_, index) => ({
		name: JSON.parse(localStorage.getItem(`category${index}`)),
		icon: mapCategoryToImage(JSON.parse(localStorage.getItem(`category${index}`))),
	}));

	// 카테고리별 종목(등락률) api
	const stockEarningList = async () => {
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const response = await axios.get(
				`/link/stock/earning/${selectedCategory}`, //카테고리 보내주기
				{
					headers,
				},
			);
			console.log('카테고리별 종목(등락률)', response.data.data);
			setStockEarningData(response.data.data);
		} catch (error) {
			console.error('Error fetching data from API: ', error);
		}
	};

	// 카테고리별 종목(시가총액) api
	const stockCapList = async () => {
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const response = await axios.get(
				`/link/stock/cap/${selectedCategory}`, //카테고리 보내주기
				{
					headers,
				},
			);
			console.log('카테고리별 종목(시가총액)', response.data.data);
			setStocCapData(response.data.data);
		} catch (error) {
			console.error('Error fetching data from API: ', error);
		}
	};

	return (
		<>
			<StockTopNav />
			<Grid theme='category_body'>
				{showCategory && (
					<>
						<Grid theme='modal_title'>{userName}님의 밀접 카테고리</Grid>
						<Grid>
							{userName}님의 소비 데이터를 기반으로
							<br />
							상위 5개의 카테고리를 추천했어요.
						</Grid>

						<Grid theme='categoryForm'>
							{categoryData.slice(0, 5).map((category, index) => (
								<Grid key={index}>
									<Button theme='categoryBtn' onClick={() => onClickCategory(category)}>
										<Img theme='category_icon' src={category.icon} alt={category.name} />
										<Grid theme='categoryFont'>{category.name}</Grid>
									</Button>
								</Grid>
							))}
						</Grid>
					</>
				)}
				{showStockList && selectedCategory && (
					<>
						<Grid theme='list_icon'>
							<Img theme='list_icon' src={selectedCategory.icon} alt={selectedCategory.name} />
						</Grid>
						<Grid theme='list_grid'>
							<Grid theme='list_title'>{selectedCategory.name}</Grid>
							<Grid>20개 주식</Grid>
							<Grid theme='list_content'>
								{selectedCategory.name} 카테고리와 관련한 주식들을 추천해드립니다.
								<br />더 자세한 종목 정보를 확인하고 싶으시다면 종목명을 클릭해주세요.
							</Grid>
						</Grid>
						<Grid theme='categoryForm'>
							<Grid theme='list_tab'>
								<button
									style={{
										borderRadius: '20px',
										border: 'none',
										width: '90px',
										height: '35px',
										backgroundColor: selectedTab === '수익률' ? '#88BDE7' : '#fff',
										color: selectedTab === '수익률' ? '#fff' : 'black',
									}}
									onClick={() => setSelectedTab('수익률')}>
									수익률
								</button>
								<button
									style={{
										borderRadius: '20px',
										backgroundColor: selectedTab === '시가총액' ? '#88BDE7' : '#fff',
										color: selectedTab === '시가총액' ? '#fff' : 'black',
										border: 'none',
										width: '90px',
										height: '35px',
									}}
									onClick={() => setSelectedTab('시가총액')}>
									시가총액
								</button>
							</Grid>

						{selectedTab === '수익률' && (
							<>
								<Grid theme='stock_list'>
									{stockEarningData.map((stock, index) => (
										<Grid key={index}>
											<Button theme='categoryBtn' onClick={() => onClickStock(stock)}>
												{/* <Img theme='category_icon' src={stock.icon} alt={stock.name} /> */}
												<Grid theme='category_font'>{stock.stockName}</Grid>
												<Grid theme='stock_percentage'>{stock.stockClose}</Grid>
												<Grid theme='stock_percentage'>{stock.stockRange}</Grid>
											</Button>
										</Grid>
									))}
								</Grid>
							</>
						)}
						{selectedTab === '시가총액' && (
							<>
								<Grid theme='stock_list'>
									{stockCapData.map((stock, index) => (
										<Grid theme='category_img'>
											<Grid key={index}>{/* <Img theme='category_img' src={stock.icon} alt={stock.name} /> */}</Grid>
										</Grid>
									))}
									{stockCapData.map((stock, index) => (
										<Grid key={index}>
											<Button theme='categoryBtn' onClick={() => onClickStock(stock)}>
												{/* <Img theme='category_icon' src={stock.icon} alt={stock.name} /> */}
												<Grid theme='category_font'>{stock.stockName}</Grid>
												<Grid theme='stock_percentage'>{stock.marketCap}원</Grid>
											</Button>
										</Grid>
									))}
								</Grid>
							</>
						)}
						</Grid>
					</>
				)}
			</Grid>
		</>
	);
}
export default StockCategory;
