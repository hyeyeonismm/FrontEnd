import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg';
import register from '../assets/images/register.png';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components';

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successLogin, setSuccessLogin] = useState(true);

	const onClickSignup = () => {
		navigate('/signup');
	};

	// const onClickStart = () => {
	// 	navigate('/main');
	// };

	const onClickArrow = () => {
		navigate('/onboarding');
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
		  const response = await axios.post(`${process.env.REACT_APP_SERVER_PORT}/auth/login`,
			{
			  email: email,
			  password: password,
			},
			{
			  withCredentials: true,
			}
		  );
		  
		  // 토큰 값을 가져옴
		  const token = response.data.accessToken;
		  const userName = response.data.userName;
		  // 토큰을 LocalStorage에 저장
		  localStorage.setItem("token", token);
		  // 유저 이름을 LocalStorage에 저장
		  localStorage.setItem("userName", userName);
	
		  // 로그인 성공 처리
		  console.log("로그인 성공:", response.data);
	
		  // 메인으로 이동
		  navigate("/main");
		  if (response && response.data) {
			console.log(response.data);
		  } else {
			console.error('Response or response.data is undefined');
		  }

		} catch (error) {
		  // 로그인 실패 처리
		  setSuccessLogin(false);
		  console.error("로그인 실패:", error.response.data.reason);
		}
	  };

	return (
		<>
			<Grid theme='header'>
				<Button onClick={onClickArrow}>
					<Img theme='arrow' src={arrow} alt='arrow' />
				</Button>
				<Grid theme='headerTitle'>로그인</Grid>
			</Grid>
			<Grid>
				<Img theme='register' src={register} alt='register' />
			</Grid>

			<form onSubmit={handleFormSubmit}>
				<Grid theme='loginForm'>
					<TextField id='id' label='이메일' variant='outlined' size='small' onChange={handleEmailChange}/>
					<TextField id='pw' label='패스워드' variant='outlined' size='small' onChange={handlePasswordChange} />
					<Grid theme='loginOption'>
						<div style={{ marginTop: '2px', color: '#757575' }}>계정이 없으신가요?</div>
						<Button theme='signupBtn' children='회원가입' onClick={onClickSignup} />
					</Grid>
				</Grid>
				<Grid theme='startGrid'>
					<Button theme='startBtn' children='로그인' type="submit" />
				</Grid>	
				{successLogin ? null : (
					<p>
					아이디와 비밀번호를 다시 확인해주세요.
					</p>
				)}
			</form>

			
		</>
	);
}

export default Login;
