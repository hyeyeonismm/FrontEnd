import { useNavigate } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg';
import register from '../assets/images/register.png';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components';

function Login() {
	const navigate = useNavigate();

	const onClickSignup = () => {
		navigate('/signup');
	};

	const onClickStart = () => {
		navigate('/main');
	};

	const onClickArrow = () => {
		navigate('/onboarding');
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

			<Grid theme='loginForm'>
				<TextField id='id' label='아이디' variant='outlined' size='small' />
				<TextField id='pw' label='패스워드' variant='outlined' size='small' />
				<Grid theme='loginOption'>
					<div style={{ marginTop: '2px', color: '#757575' }}>계정이 없으신가요?</div>
					<Button theme='signupBtn' children='회원가입' onClick={onClickSignup} />
				</Grid>
			</Grid>

			<Grid theme='startGrid'>
				<Button theme='startBtn' onClick={onClickStart} children='로그인' />
			</Grid>
		</>
	);
}

export default Login;
