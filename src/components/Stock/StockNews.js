import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid, Img, Button } from '../index';
import axios from 'axios';
import StockNewsModal from './StockNewsModal';

function StockNews({ stockName, formattedDate, stockCode }) {
	const [newsList, setNewsList] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedNews, setSelectedNews] = useState({});

	const onClickNews = (news) => {
		setSelectedNews(news);
		setIsModalOpen(true);
	};
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const requestData = {
					search_date: formattedDate,
					news_type: '2',
				};

				const response = await axios.post(`/news/${stockCode}`, requestData);
				if (response.data) {
					const newsItems = response.data.result.slice(0, 10).map((newsItem) => ({
						newsTitle: newsItem.news_title,
						newsType: newsItem.news_type,
						newsCode: newsItem.news_code,
					}));
					setNewsList(newsItems);
					// const newsTitles = response.data.result.slice(0, 10).map((newsItem) => newsItem.news_title);
					// const newsType = response.data.result.slice(0, 10).map((newsItem) => newsItem.news_type);
					// const newsCode = response.data.result.slice(0, 10).map((newsItem) => newsItem.news_code);
					// setNewsList(newsTitles);
					// console.log(newsType);
					// console.log(newsCode);
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
				<Grid theme='newsFont'>뉴스</Grid>
				<div>
					{newsList.map((news, index) => (
						<Button key={index} theme='newsBtn' onClick={() => onClickNews(news)}>
							{news.newsTitle}
						</Button>
					))}
				</div>
			</Grid>
			{isModalOpen && (
				<StockNewsModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					news={selectedNews}
					formattedDate={formattedDate}
				/>
			)}
		</>
	);
}
export default StockNews;
