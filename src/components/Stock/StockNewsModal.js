import React, { useState, useEffect } from 'react';
import { styled, Modal, Alert } from '@mui/material';
import { Grid } from '../../components/index';
import Close from '@mui/icons-material/CloseRounded';
import indiInstance from '../../api/indi';

function StockNewsModal({ isOpen, onClose, news, formattedDate }) {
	const [modalData, setModalData] = useState(null);
	useEffect(() => {
		console.log(news.newsType);
		console.log(news.newsCode);
		if (isOpen) {
			const fetchData = async () => {
				try {
					const requestData = {
						search_date: formattedDate,
						news_type_code: news.newsType,
					};
					console.log(news.newsCode);
					const response = await indiInstance.post(`/news/detail/${news.newsCode}`, requestData);
					if (response.data) {
						setModalData(response.data.message.result[0]);
					} else {
						console.log('error');
					}
				} catch (error) {
					console.error('모달 데이터를 불러오는 데 실패했습니다.', error);
				}
			};

			fetchData();
		}
	}, [isOpen, news, formattedDate]);
	return (
		<>
			<Modal open={isOpen} onClose={onClose}>
				<Grid theme='modal_body'>
					<Grid theme='modal_header'>
						<CloseButton onClick={onClose} title='닫기' />
						<Grid theme='modal_title'>{news.newsTitle}</Grid>
					</Grid>
					<Grid theme='modal_section'>
						{modalData ? <div dangerouslySetInnerHTML={{ __html: modalData }} /> : <div>헤드라인 뉴스입니다.</div>}
					</Grid>
				</Grid>
			</Modal>
		</>
	);
}
const CloseButton = styled(Close)(() => ({
	float: 'right',
	cursor: 'pointer',
	color: 'grey',
	fontSize: 26,
	'&:hover': {
		color: 'lightgrey',
	},
}));

export default StockNewsModal;
