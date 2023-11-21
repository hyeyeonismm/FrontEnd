import React, { useState } from 'react';
import home from '../assets/images/home.svg';
import toggle from '../assets/images/toggle.svg';
import { useNavigate } from 'react-router-dom';
import { styled, Modal, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button, Img } from '../components';
import arrow from '../assets/images/arrow.svg';
import logout from '../assets/images/logout.svg';
import instance from '../api/axios';

function TopNav({ onBackButtonClick }) {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const userName = localStorage.getItem('userName');
	const email = sessionStorage.getItem('email');
	const card = localStorage.getItem('cardName');

	const homeButton = () => {
		navigate('/main');
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const onClickButton = () => {
		onBackButtonClick();
	};

	const onClickLogout = async () => {
		try {
			const token = localStorage.getItem('token');
			const headers = {
				Authorization: `Bearer ${token}`,
			};
			const response = await instance.post('/auth/logout', {}, { headers });
			if (response.data) {
				alert(response.data.message);
			}
		} catch (error) {
			console.log('로그아웃 실패');
		}
	};

	return (
		<>
			<Grid theme='topNavContainer'>
				{/* 뒤로가기 버튼 */}
				<button style={buttonStyle} onClick={onClickButton}>
					<img src={arrow} alt='arrow' />
				</button>

				{/* 메뉴 버튼 */}
				<button style={buttonStyle} onClick={openModal}>
					<img src={toggle} alt='toggle' />
				</button>

				{/* 모달 창 */}
				<Modal open={isOpen} onClose={closeModal} sx={modalWrap}>
					<Box sx={modalStyle}>
						{/* 홈 버튼 */}
						<Button theme='home' onClick={homeButton}>
							<Img theme='home' src={home} />
						</Button>
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
						<Button theme='logout' onClick={onClickLogout}>
							<Img theme='logout' src={logout} />
							Logout
						</Button>
					</Box>
				</Modal>
			</Grid>
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
	marginTop: '15px',
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
	height: '700px',
};

export default TopNav;
