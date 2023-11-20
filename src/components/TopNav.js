import React, { useState, useEffect } from 'react';
import home from '../assets/images/home.svg';
import toggle from '../assets/images/toggle.svg';
import mainCharacter from '../assets/images/mainCharacter.png';
import { useNavigate } from 'react-router-dom';
import { styled, Modal, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button, Img } from '../components';
import WasteBar from './WasteBar';
import MonthWaste from './MonthWaste';
import logout from '../assets/images/logout.svg'

function TopNav() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedButton, setSelectedButton] = useState('/card');

	const userName = localStorage.getItem('userName');
	const email = sessionStorage.getItem('email');
	const card = localStorage.getItem('cardName')
	


	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const onClickButton = () => {
		navigate('/main');
	};

	return (
		<>
			<Grid theme='topNavContainer'>
				{/* 홈 버튼 */}
				<button style={buttonStyle} onClick={onClickButton}>
					<img src={home} alt='arrow' />
				</button>

				{/* 메뉴 버튼 */}
				<button style={buttonStyle} onClick={openModal}>
					<img src={toggle} alt='toggle' />
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
									<Grid theme='subtxt'>{userName}님</Grid>
								</Grid>
								<Grid theme='sideBarTxt'>
									<Grid theme='maintxt'>Email</Grid>
									<Grid theme='subtxt'>{email}</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid theme='navSection'>
							보유 카드
							<Grid theme='sideBarBox'>
								<Grid theme='sideBarTxt'>
									<Grid theme='maintxt'>Card Name</Grid>
									<Grid theme='subtxt'>{card}</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Button theme="logout">
							<Img theme="logout" src={logout}/>Logout
						</Button>
						
					</Box>
				</Modal>
			</Grid>

			{/* <div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginLeft: '30px',
					marginRight: '30px',
				}}>
				<StyledButton
					style={{ color: selectedButton === '/card' ? '#88BDE7' : 'black' }}
					onClick={() => handleButtonClick('/card')}>
					{selectedButton === '/card' ? (
						<Img theme='mainCharacter' src={mainCharacter} alt='mainCharacter' />
					) : (
						<div style={{ width: '150px', height: '55px' }}></div>
					)}
					<Grid>내 소비</Grid>
				</StyledButton>

				<StyledButton
					style={{ color: selectedButton === '/stock' ? '#88BDE7' : 'black' }}
					onClick={() => handleButtonClick('/stock')}>
					{selectedButton === '/stock' ? (
						<Img theme='mainCharacter' src={mainCharacter} alt='mainCharacter' />
					) : (
						<div style={{ width: '150px', height: '55px' }}></div>
					)}
					<Grid>주주되기</Grid>
				</StyledButton>
			</div>
			<Grid theme='topNavLine' /> */}
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

const StyledButton = styled('button')({
	background: '#fff',
	border: 'none',
	textAlign: 'center',
	color: 'black',
	width: '150px',
	height: '45px',
	fontSize: '18px',
	fontWeight: 700,
	marginBottom: '35px',
	marginTop: '-8px',
});
export default TopNav;
