import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Img, Button } from '../index.js';
import TopNav from '../TopNav';
import Footer from '../Footer';
import arrow from '../../assets/images/arrow.svg';
import logo from '../../assets/images/finance.png';
import Chart from '../Chart.js';
import News from '../News.js';

function StockInformation() {
	const location = useLocation();
	const stockName = location.state?.stockName;
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [showChart, setShowChart] = useState(true);
	const [showNews, setShowNews] = useState(false);

	const onClickButton = () => {
		setShowNews(!showNews);
		setShowChart(!showChart);
	};
	const toggleSide = () => {
		setIsOpen(true);
	};
	return (
		<>
			<Grid theme='stock_nav'>
				<Button>
					<img style={{ width: '13px', height: '26px', marginTop: 7 }} src={arrow} alt='arrow' />
				</Button>
			</Grid>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginLeft: '30px',
					marginRight: '30px',
				}}></div>
			<Grid theme='about_stock'>
				<Img theme='stock_logo' src={logo} alt='logo' />
				<Grid>
					<Grid theme='stock_title'>{stockName}</Grid>
					<Grid theme='stock_inform'>
						<Grid theme='stock_price'>57,999원</Grid>
						<Grid theme='stock_subinform'>+913원</Grid>
						<Grid theme='stock_subinform'>(1.6%)</Grid>
					</Grid>
				</Grid>
				<Button theme='shinhanLinkBtn' onClick={onClickButton}>
					{showNews ? '차트보기' : '뉴스보기'}
				</Button>
			</Grid>
			{showChart && <Chart />}
			{showNews && <News />}
			<Footer />
		</>
	);
}
export default StockInformation;
