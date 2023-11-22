import React, { useState, useEffect } from 'react';
import { Grid, Button } from '../index';
import indiInstance from '../../api/indi';
import { BeatLoader } from 'react-spinners';
import StockNewsModal from './StockNewsModal';

function StockNews({ stockName, formattedDate, stockCode }) {
	const [loading, setLoading] = useState(false);
	const [newsList, setNewsList] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedNews, setSelectedNews] = useState({});

	const onClickNews = (news) => {
		setSelectedNews(news);

		setIsModalOpen(true);
	};

	const fetchNews = async () => {
		setLoading(true);
		try {
			const requestData = {
				search_date: formattedDate,
				news_type: '2',
			};

			const response = await indiInstance.post(`/news/${stockCode}`, requestData);
			if (response.data) {
				const newsItems = response.data.result.slice(0, 8).map((newsItem) => ({
					newsTitle: newsItem.news_title,
					newsType: newsItem.news_type,
					newsCode: newsItem.news_code,
				}));

				setNewsList(newsItems);
			} else {
				setLoading(false);
				console.log(response);
			}
		} catch (error) {
			setLoading(false);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!isModalOpen) {
			fetchNews();
		}
	}, [isModalOpen, formattedDate, stockCode]);

	return (
		<>
			{loading ? (
				<Grid theme='loading_body'>
					<BeatLoader color='#0094FF' loading={loading} size={25} />
				</Grid>
			) : (
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
				</>
			)}
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
