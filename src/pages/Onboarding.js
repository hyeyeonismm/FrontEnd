import { useNavigate } from 'react-router-dom';
import { Grid, Button, Img } from '../components/index.js';
import main from '../assets/images/mainCharacter.png';
import main_bg from '../assets/images/main_bg.svg';
import logo from '../assets/images/logo2.svg';

function Onboarding() {
	const navigate = useNavigate();

	const handleButtonClick = (path) => {
		navigate(path);
	};

	return (
		<>
			{/* <Grid theme='header'>
				<div style={{ marginLeft: '45px', justifyContent: 'center', flex: 1 }}>
					<Grid theme='headerTitle'>Link Stock</Grid>
				</div>
			</Grid> */}
			<Grid theme='main'>
				<Grid theme='introTagLine'>소비 데이터 기반 주식 추천 서비스</Grid>
				<Img theme='logoImg' src={logo} alt='logo' />
				<Grid theme='description'>평범한 일상 속에서 개인화된 주식 투자 기회를 제안합니다.</Grid>
			</Grid>
			<Grid theme='main_background'>
				<Img theme='main' src={main} alt='main' />
				<Button theme='mainStartBtn' children='시작하기' onClick={() => handleButtonClick('/login')} />
			</Grid>
			<Img theme='main_bg' src={main_bg}></Img>
		</>
	);
}

export default Onboarding;
