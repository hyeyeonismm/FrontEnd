import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Img, Button } from '../index.js';
import logo from '../../assets/images/finance.png';
import Chart from './StockChart.js';
import News from './StockNews.js';
import TopNav from '../TopNav.js';
import Footer from '../Footer.js';

function StockInformation() {
	const location = useLocation();
	const stockName = location.state?.stockName;
	const stockPrice = location.state?.stockPrice;
	const stockCode = location.state?.stockCode;
	const navigate = useNavigate();
	const [showChart, setShowChart] = useState(true);
	const [showNews, setShowNews] = useState(false);
	const [stockData, setStockData] = useState(null);
	const [priceGap, setPriceGap] = useState();

	// 날짜 받아오기
	const date = new Date();
	const pastDate = new Date(new Date().setFullYear(date.getFullYear() - 1));
	const formattedDate = `${date.toISOString().slice(0, 4)}${date.toISOString().slice(5, 7)}${date
		.toISOString()
		.slice(8, 10)}`;
	const formattedPastDate = `${pastDate.toISOString().slice(0, 4)}${pastDate.toISOString().slice(5, 7)}${pastDate
		.toISOString()
		.slice(8, 10)}`;

	console.log(formattedDate);
	console.log(formattedPastDate);
	const onClickButton = () => {
		setShowNews(!showNews);
		setShowChart(!showChart);
	};

	// 뒤로가기 버튼 클릭 시의 동작
	const handleBackButtonClick = () => {
		navigate('/stock');
	};

	useEffect(() => {
		console.log('실행되고: ', stockCode);
		const socket = new WebSocket('ws://103.218.158.71:8765');

		socket.onopen = (event) => {
			console.log('WebSocket Connected');
			socket.send(stockCode);
		};

		socket.addEventListener('message', (event) => {
			if (event.data) {
				let numberPart = event.data.split(':')[1].trim();
				let formattedNum = new Intl.NumberFormat('en-US').format(parseInt(numberPart));
				const diff = stockPrice - formattedNum;
				console.log('Message from server:', event.data);
				setStockData(formattedNum);
			} else {
				console.log('장시간이 아닙니다.', stockCode);
				setStockData('장시간이 아닙니다.');

				socket.close();
			}
		});

		return () => {
			socket.close();
		};
	}, []);

	return (
		<>
			<TopNav onBackButtonClick={handleBackButtonClick} />

			<Grid theme='about_stock'>
				<Grid theme='stock_first'>
					<Img theme='stock_logo' src={logo} alt='logo' />
					<Grid>
						<Grid theme='stock_title'>{stockName}</Grid>
						<Grid theme='stock_inform'>
							<Grid theme='stock_price'>{stockData}</Grid>
							{/* <Grid theme='stock_subinform'>{priceGap >= 0 ? `+${priceGap}원` : `-${priceGap}원`}</Grid> */}
							{/* <Grid theme='stock_subinform'>(1.6%)</Grid> */}
						</Grid>
					</Grid>
				</Grid>
				<Button theme='showBtn' onClick={onClickButton}>
					{showNews ? '차트보기' : '뉴스보기'}
				</Button>
			</Grid>
			{showChart &&
				(console.log(stockCode),
				(
					<Chart
						formattedDate={formattedDate}
						formattedPastDate={formattedPastDate}
						stockCode={stockCode}
						stockName={stockName}
					/>
				))}
			{showNews && <News stockName={stockName} formattedDate={formattedDate} stockCode={stockCode} />}
			<Footer />
		</>
	);
}
export default StockInformation;
