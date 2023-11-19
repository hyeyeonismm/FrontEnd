import React, { useState } from 'react';
import home from '../assets/images/home.svg';
import toggle from '../assets/images/toggle.svg';
import mainCharacter from '../assets/images/mainCharacter.png';
import { useNavigate } from 'react-router-dom';
import { styled, Modal, Box, Typography, Paper, IconButton, InputBase, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button, Img } from '../components';

function TopNav() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedButton, setSelectedButton] = useState('/card');

	const handleButtonClick = (path) => {
		setSelectedButton(path);
		navigate(path);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Grid theme='topNavContainer'>
				{/* 홈 버튼 */}
				<button style={buttonStyle} onClick={() => handleButtonClick('/main')}>
					<img style={{ marginTop: -20 }} src={home} alt='arrow' />
				</button>

				{/* 메뉴 버튼 */}
				<button style={buttonStyle} onClick={openModal}>
					<img style={{ marginTop: -5 }} src={toggle} alt='toggle' />
				</button>

				{/* 모달 창 */}
				<Modal open={isOpen} onClose={closeModal} sx={modalWrap}>
					<Box sx={modalStyle}>
						<SearchField>
							<input
								type='text'
								style={{
									border: 'none',
									background: '#f3f3f3',
									outline: 'none',
								}}
								placeholder='종목을 검색해보세요'
							/>
							<SearchIcon />
						</SearchField>

						<Typography id='modal-modal-title' variant='h7' component='h4'>
							기본 정보
							<Grid theme='sideBarBox'></Grid>
						</Typography>
						<Typography id='modal-modal-title' variant='h7' component='h4'>
							소비 내역
							<Grid theme='sideBarBox'></Grid>
						</Typography>
						<Typography id='modal-modal-title' variant='h7' component='h4'>
							관심있는 종목
							<Grid theme='sideBarBox'></Grid>
						</Typography>
					</Box>
				</Modal>
			</Grid>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginLeft: '30px',
					marginRight: '30px',
				}}>
				<Button theme='topNavBtn' onClick={() => handleButtonClick('/card')} selected={selectedButton === '/card'}>
					<span style={{ color: selectedButton === '/card' ? '#88BDE7' : 'black' }}>내 소비</span>
					{selectedButton === '/card' && <Img theme='mainCharacter' src={mainCharacter} alt={mainCharacter} />}
				</Button>
				<Button theme='topNavBtn' onClick={() => handleButtonClick('/stock')} selected={selectedButton === '/stock'}>
					<span style={{ color: selectedButton === '/stock' ? '#88BDE7' : 'black' }}>주주되기</span>
					{selectedButton === '/stock' && <Img theme='mainCharacter' src={mainCharacter} alt={mainCharacter} />}
				</Button>
			</div>
			<Grid theme='topNavLine' />
		</>
	);
}
const SearchField = styled(Box)({
	borderRadius: '20px',
	background: '#f3f3f3',
	height: '25px',
	width: '200px',
	display: 'flex',
	padding: '10px 20px',
	margin: '10px 0px 20px',
	gap: 10,
	color: '#757575',
	fontSize: 14,
});

const buttonStyle = {
	background: '#fff',
	border: 'none',
	cursor: 'pointer',
};

const modalWrap = {
	margin: '0 auto',
	width: '390px',
};

const modalStyle = {
	height: '777px',
	padding: '33px',
	marginTop: '8px',
	marginLeft: '20%',
	background: 'white',
};

export default TopNav;
