import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Img, Button } from '../index';
import StockTopNav from './StockTopNav';
import instance from '../../api/axios';
import { categoryImages } from '../Card/constants.js';
import Footer from '../Footer/Footer.js';
import DonutChart from '../DonutChart.js';

function StockCategory() {
	const navigate = useNavigate();
	const [showCategory, setShowCategory] = useState(true);
	const [showStockList, setShowStockList] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedTab, setSelectedTab] = useState('수익률');
	const userName = localStorage.getItem('userName');
	const [stockEarningData, setStockEarningData] = useState([]);
	const [stockCapData, setStockCapData] = useState([]);
	const onClickCategory = (category) => {
		setSelectedCategory(category);
		stockCapList(category);
		stockEarningList(category);
		setShowStockList(true);
		setShowCategory(false);
	};

	const onClickStock = (stock) => {
		navigate('/stock/information', {
			state: { stockName: stock.stockName, stockPrice: stock.stockClose, stockCode: stock.stockCode },
		});
	};

	// 카테고리 이름, 이미지 매핑
	const mapCategoryToImage = (category) => categoryImages[category] || null;

	const uniqueNames = new Set();

	const categoryData = Array.from({ length: 5 }, (_, index) => {
		const localStorageKey = `category${index}`;
		const name = JSON.parse(localStorage.getItem(localStorageKey));
		const icon = mapCategoryToImage(name);

		if (!uniqueNames.has(name)) {
			uniqueNames.add(name);
			return { name, icon };
		} else {
			return { name: null, icon: null };
		}
	});

	// 카테고리별 종목(등락률) api
	const stockEarningList = async (category) => {
		console.log('stockEarningList', category);
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const response = await instance.get(
				`/link/stock/earning/${category.name}`, //카테고리 보내주기
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
	const stockCapList = async (category) => {
		console.log('stockCapList', category);
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const response = await instance.get(
				`/link/stock/cap/${category.name}`, //카테고리 보내주기
				{
					headers,
				},
			);
			console.log('카테고리별 종목(시가총액)', response.data.data);
			setStockCapData(response.data.data);
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
													<Grid theme='category_price'>{parseFloat(stock.stockClose).toLocaleString()}원</Grid>
													<Grid theme='stock_percentage'>+{stock.stockRange}%</Grid>
												</Button>
											</Grid>
										))}
									</Grid>
								</>
							)}
							{selectedTab === '시가총액' && (
								<>
									<Grid theme='stock_list'>
										<DonutChart data={stockCapData} />

										{stockCapData.map((stock, index) => (
											<Grid key={index}>
												<Button theme='marketCapBtn' onClick={() => onClickStock(stock)}>
													<Grid theme='category_font'>{stock.stockName}</Grid>
													<Grid theme='stock_percentage'>{parseFloat(stock.marketCap).toLocaleString()}원</Grid>
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
			<Footer />
		</>
	);
}
export default StockCategory;
