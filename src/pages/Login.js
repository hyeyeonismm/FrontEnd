import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg';
import logoColumn from '../assets/images/logoColumn.svg';
import { TextField, Alert, AlertTitle } from '@mui/material';
import { Grid, Button, Img } from '../components';
import Footer from '../components/Footer/Footer';

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [successLogin, setSuccessLogin] = useState(true);

	const onClickSignup = () => {
		navigate('/signup');
	};

	const onClickStart = () => {
		navigate('/main');
	};

	const onClickArrow = () => {
		navigate('/');
	};

	// email input 값 변경 시 실행되는 함수
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	// password input 값 변경 시 실행되는 함수
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await instance.post(
				'/auth/login',
				{
					email: email,
					password: password,
				},
				{
					withCredentials: true,
				},
			);

			console.log(response);

			// 토큰 값을 가져옴
			const token = response.data.accessToken;
			const userName = response.data.userName;
			// 토큰을 LocalStorage에 저장
			localStorage.setItem('token', token);
			// 유저 이름을 LocalStorage에 저장
			localStorage.setItem('userName', userName);

			// 로그인 성공 처리
			console.log('로그인 성공:');

			// 메인으로 이동
			navigate('/main');
		} catch (error) {
			// 로그인 실패 처리
			setSuccessLogin(false);
			console.error('로그인 실패:');
		}
		sessionStorage.setItem('email', email);
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
			<Grid>
				<Grid theme='loginFont'>이메일과 비밀번호를 입력해주세요</Grid>
				<form onSubmit={handleFormSubmit}>
					<Grid theme='loginForm'>
						<TextField id='id' type='email' label='이메일' variant='outlined' size='small' onChange={handleEmailChange} />
						<TextField
							id='pw'
							type='password'
							label='패스워드'
							variant='outlined'
							size='small'
							onChange={handlePasswordChange}
						/>
						{successLogin ? null : (
							<Alert severity='error' style={{ marginLeft: -20, width: '260px' }}>
								<AlertTitle>로그인 실패</AlertTitle>
								<strong>아이디</strong>와 <strong>비밀번호</strong>를 확인해보세요.
							</Alert>
						)}
						<Grid theme='loginOption'>
							<div style={{ marginTop: '2px', color: '#757575' }}>계정이 없으신가요?</div>
							<Button theme='signupBtn' children='회원가입' onClick={onClickSignup} />
						</Grid>
					</Grid>
					<Grid theme='startGrid'>
						<Button theme='startBtn' children='로그인' type='submit' />
					</Grid>
				</form>
			</Grid>
		</>
	);
}

export default Login;
