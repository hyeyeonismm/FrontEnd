import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg';
import register from '../assets/images/register.png';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components';
import CardConsentModal from '../components/CardConsentModal';

function Signup() {
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false);
	const [sameEmail, setSameEmail] = useState(false); //이메일 중복 확인
	const [signupData, setSignupData] = useState({
		//회원가입 데이터
		userName: "",
		email: "",
		password: "",
		agree: 0,
	});

	// userName input 값 변경 시 실행되는 함수
	const handleNameChange = (event) => {
	setSignupData({ ...signupData, userName: event.target.value });
	};

	// email input 값 변경 시 실행되는 함수
	const handleEmailChange = (event) => {
	setSignupData({ ...signupData, email: event.target.value });
	};

	// password input 값 변경 시 실행되는 함수
	const handlePasswordChange = (event) => {
	setSignupData({ ...signupData, password: event.target.value });
	};

	// agree 시에 실행되는 함수
	const handleConsentChange = (consentValue) => {
		if (!modalOpen) {
			console.log("Consent Value:", consentValue);
			setSignupData({ ...signupData, agree: consentValue });
		  }
	};
	
	// 회원가입 데이터 전송
	const postSignupData = async (event) => {
	event.preventDefault();
	console.log("회원가입 데이터:", signupData);
	try {
		const response = await axios.post(
		'/auth/signup',
		signupData
		);

		if (response.data.statusCode == 200) {
		alert("회원가입이 완료되었습니다.");
		setSignupData({
			userName: "",
			email: "",
			password: "",
			agree: 0,
		});
		navigate("/login");
		}
	} catch (error) {
		console.log("회원가입 실패 ");
		alert(error);
		setSameEmail(true);
	}
	};

	const onClickArrow = () => {
		navigate('/login');
	};

	return (
		<>
			<Grid theme='header'>
				<Button onClick={onClickArrow}>
					<Img theme='arrow' src={arrow} alt='arrow' />
				</Button>
				<Grid theme='headerTitle'>회원가입</Grid>
			</Grid>
			<Grid>
				<Img theme='register' src={register} alt='register' />
			</Grid>

			<form onSubmit={postSignupData}>
				<Grid theme='registerForm'>
					<TextField id='name' label='이름' variant='outlined' size='small'  onChange={handleNameChange} />
					<TextField id='email' label='이메일' variant='outlined' size='small' onChange={handleEmailChange} />
					<TextField id='pw' label='패스워드' variant='outlined' size='small' onChange={handlePasswordChange} />
				</Grid>
				<Grid theme='cardGrid'>
					<div style={{ fontSize: '14px', color: '#757575' }}>카드내역 연동 동의서</div>
					<CardConsentModal
						onConsentChange={handleConsentChange}
						onExited={() => setModalOpen(false)}
					/>
				</Grid>

				<Grid theme='startGrid'>
					<Button theme='startBtn' children='회원가입' type="submit"/>
				</Grid>
			</form>
		</>
	);
}
export default Signup;
