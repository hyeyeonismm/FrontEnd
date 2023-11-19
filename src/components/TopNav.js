import React, { useState } from 'react';
import home from '../assets/images/home.svg';
import toggle from '../assets/images/toggle.svg';
import mainCharacter from '../assets/images/mainCharacter.png';
import { useNavigate } from 'react-router-dom';
import { styled, Modal, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button, Img } from '../components';
import WasteBar from './WasteBar';
import MonthWaste from './MonthWaste';

function TopNav() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedButton, setSelectedButton] = useState('/card');

	const userName = '하린';
	const month = '11';
	const money = '111,111';
	const cardName = '신한카드 Deep Dream Platinum+';
	const userEmail = 'harin1212';

	const name = `${userName}님`;
	const wasteMonth = `${month}월`;
	const amount = `${money}원`;
	const card = `${cardName}`;
	const email = `${userEmail}`;

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
							<Button theme='sidebarBtn'>
								<SearchIcon />
							</Button>
						</SearchField>

						<Grid theme='navSection'>
							기본 정보
							<Grid theme='sideBarBox'>
								<Grid theme='sideBarTxt'>
									<Grid theme='maintxt'>Your Name</Grid>
									<Grid theme='subtxt'>{name}</Grid>
								</Grid>
								<Grid theme='sideBarTxt'>
									<Grid theme='maintxt'>Email</Grid>
									<Grid theme='subtxt'>{email}</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid theme='navSection'>
							소비 내역
							<Grid theme='consumeBox'>
								<MonthWaste wasteMonth={wasteMonth} amount={amount} />
								<WasteBar />
							</Grid>
						</Grid>
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
	margin: '40px 0px',
	gap: 0,
	color: '#757575',
	fontSize: 14,
	cursor: 'pointer',
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
	padding: '30px',
	marginLeft: '20%',
	background: 'white',
};

export default TopNav;
