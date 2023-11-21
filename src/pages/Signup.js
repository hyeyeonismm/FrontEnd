import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg';
import logoColumn from '../assets/images/logoColumn.svg';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components';
import CardConsentModal from '../components/CardConsentModal';

function Signup() {
	const navigate = useNavigate();
	const [alertSeverity, setAlertSeverity] = useState('info');
	const [modalOpen, setModalOpen] = useState(false);
	const [sameEmail, setSameEmail] = useState(false); //이메일 중복 확인
	const [signupData, setSignupData] = useState({
		//회원가입 데이터
		userName: '',
		email: '',
		password: '',
		agree: 0,
	});

	// userName input 값 변경 시 실행되는 함수
	const handleNameChange = (event) => {
		setSignupData({ ...signupData, userName: event.target.value });
	};

	// email input 값 변경 시 실행되는 함수
	const handleEmailChange = async (e) => {
		const email = e.target.value;
		setSignupData({ ...signupData, email: email });

		console.log(email)
		if (email && email.includes('@')) {
			try {
				const response = await instance.post('/auth/emailcheck', { email });
				if (response.data) {
					setAlertSeverity('success');
				}
			} catch (error) {
				setAlertSeverity('error');
			}
		}
	};

	// password input 값 변경 시 실행되는 함수
	const handlePasswordChange = (event) => {
		setSignupData({ ...signupData, password: event.target.value });
	};

	// agree 시에 실행되는 함수
	const handleConsentChange = (consentValue) => {
		if (consentValue !== undefined) {
			console.log('Consent Value:', consentValue);
			setSignupData({ ...signupData, agree: consentValue });
		} else {
			console.log('agree 없음');
		}
	};

	// 회원가입 데이터 전송
	const postSignupData = async (event) => {
		event.preventDefault();
		console.log('회원가입 데이터:', signupData);
		try {
			const response = await instance.post('/auth/signup', signupData);

			if (response.status == 200) {
				alert('회원가입이 완료되었습니다.');
				setSignupData({
					userName: '',
					email: '',
					password: '',
					agree: 0,
				});
				navigate('/login');
			} else if (response.data.message == '회원 가입을 실패했습니다. 이메일이 이미 존재합니다.') {
				alert('회원 가입을 실패했습니다. 이메일이 이미 존재합니다.');
			}
		} catch (error) {
			console.log('회원가입 실패 ');
			alert('회원가입 실패 ');
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
			</Grid>
			<Grid theme='registerImg'>
				<Img theme='register' src={logoColumn} alt='register' />
			</Grid>
			<Grid theme='loginFont'>카드를 연동하고 회원 등록을 해주세요</Grid>

			<form onSubmit={postSignupData}>
				<Grid theme='registerForm'>
					<TextField id='name' label='이름' variant='outlined' size='small' onChange={handleNameChange} />
					<TextField id='email' type='email' label='이메일' variant='outlined' size='small' onChange={handleEmailChange} />
					<Alert severity={alertSeverity} size='small'>
						{alertSeverity === 'error'
							? '이미 존재하는 이메일입니다.'
							: alertSeverity === 'success'
							? '사용 가능한 이메일입니다.'
							: '이메일을 입력해주세요.'}
					</Alert>
					<TextField
						id='pw'
						label='패스워드'
						variant='outlined'
						size='small'
						type='password'
						onChange={handlePasswordChange}
					/>
				</Grid>
				<Grid theme='cardGrid'>
					<div style={{ fontSize: '14px' }}>카드내역 연동 동의서</div>
					<CardConsentModal onConsentChange={handleConsentChange} />
				</Grid>

				<Grid theme='startGrid'>
					<Button theme='startBtn' children='회원가입' type='submit' />
				</Grid>
			</form>
		</>
	);
}
export default Signup;
