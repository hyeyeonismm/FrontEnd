import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Img, Button } from '../index';
import axios from 'axios';

function StockNews({ stockName, formattedDate, stockCode }) {
	const [newsList, setNewsList] = useState([]);
	console.log(stockCode);
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const requestData = {
					search_date: formattedDate,
					news_type_code: '2',
				};

				const response = await axios.post('/news/055550', requestData);

				if (response.data.success) {
					console.log(response);
				} else {
					console.log(response);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchNews();
	}, [stockName, formattedDate, stockCode]);

	return (
		<>
			<Grid theme='news_body'>
				<div>
					{/* 뉴스 목록 렌더링 */}
					{newsList.map((news, index) => (
						<div key={index}>{/* 뉴스 항목 렌더링 */}</div>
					))}
				</div>
				<Grid theme='newsFont'>뉴스</Grid>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
			</Grid>
		</>
	);
}
export default StockNews;
