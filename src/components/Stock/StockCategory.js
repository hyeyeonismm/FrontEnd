import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Img, Button } from '../index';
import TopNav from '../TopNav';
import food from '../../assets/images/category1.svg';
import shopping from '../../assets/images/category2.svg';
import doctor from '../../assets/images/category3.svg';
import light from '../../assets/images/category4.svg';
import life from '../../assets/images/category5.svg';
import culture from '../../assets/images/category6.svg';
import traffic from '../../assets/images/category7.svg';
import travel from '../../assets/images/category8.svg';
import education from '../../assets/images/category9.svg';

function StockCategory() {
	const navigate = useNavigate();
	const [showCategory, setShowCategory] = useState(true);
	const [showStockList, setShowStockList] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedTab, setSelectedTab] = useState('수익률');

	const onClickCategory = (category) => {
		setSelectedCategory(category);
		setShowStockList(true);
		setShowCategory(false);
	};

	const onClickStock = (stock) => {
		navigate('/stock/information', { state: { stockName: stock.name } });
	};

	//예시 데이터
	const categoryData = [
		{ name: '식비', icon: food, percentage: '50%' },
		{ name: '여행/숙박', icon: travel, percentage: '50%' },
		{ name: '교통', icon: traffic, percentage: '50%' },
		{ name: '문화/여가', icon: culture, percentage: '50%' },
		{ name: '패션/쇼핑', icon: shopping, percentage: '50%' },
	];

	const stockData = [
		{ name: '삼성전자', icon: food, percentage: '+20%' },
		{ name: '카카오', icon: travel, percentage: '50%' },
		{ name: 'LG전자', icon: traffic, percentage: '50%' },
		{ name: '하이브', icon: culture, percentage: '50%' },
		{ name: 'JYP', icon: shopping, percentage: '50%' },
	];

	return (
		<>
			<TopNav />

			<Grid theme='category_body'>
				{showCategory && (
					<>
						<Grid theme='modal_title'>김하린님의 밀접 카테고리</Grid>
						<Grid>
							김하린님의 소비 데이터를 기반으로
							<br />
							상위 5개의 카테고리를 추천했어요.
						</Grid>

						<Grid theme='categoryForm'>
							{categoryData.slice(0, 5).map((category, index) => (
								<Grid key={index}>
									<Button theme='categoryBtn' onClick={() => onClickCategory(category)}>
										<Img theme='category_icon' src={category.icon} alt={category.name} />
										<Grid theme='categoryFont'>{category.name}</Grid>
										<Grid>{category.percentage}</Grid>
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
							<Grid>33개 회사 / 13개 ETF</Grid>
							<Grid theme='list_content'>카테고리 설명입니다. 카테고리 설명입니다. 카테고리 설명입니다...</Grid>
						</Grid>
						<Grid theme='categoryForm'>
							<Grid theme='list_tab'>
								<Button theme='listTabBtn' onClick={() => setSelectedTab('수익률')}>
									수익률
								</Button>
								<Button theme='listTabBtn' onClick={() => setSelectedTab('시가총액')}>
									시가총액
								</Button>
							</Grid>

							{selectedTab === '수익률' && (
								<>
									<Grid theme='stock_list'>
										{stockData.map((stock, index) => (
											<Grid key={index}>
												<Button theme='categoryBtn' onClick={() => onClickStock(stock)}>
													<Img theme='category_icon' src={stock.icon} alt={stock.name} />
													<Grid theme='category_font'>{stock.name}</Grid>
													<Grid theme='stock_percentage'>{stock.percentage}</Grid>
												</Button>
											</Grid>
										))}
									</Grid>
								</>
							)}
							{selectedTab === '시가총액' && (
								<>
									<Grid theme='stock_list'>
										{stockData.map((stock, index) => (
											<Grid theme='category_img'>
												<Grid key={index}>
													<Img theme='category_img' src={stock.icon} alt={stock.name} />
												</Grid>
											</Grid>
										))}
										{stockData.map((stock, index) => (
											<Grid key={index}>
												<Button theme='categoryBtn' onClick={() => onClickStock(stock)}>
													<Img theme='category_icon' src={stock.icon} alt={stock.name} />
													<Grid theme='category_font'>{stock.name}</Grid>
													<Grid theme='stock_percentage'>{stock.percentage}</Grid>
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
