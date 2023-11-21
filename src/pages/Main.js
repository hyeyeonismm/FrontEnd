import OnboardingSlide from '../components/OnboardingSlide';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '../components';

function Main() {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/card');
	};

	return (
		<>
			<div style={onboardingWrap}>
				<Grid theme='header'>
					<div style={{ marginLeft: '45px', justifyContent: 'center', flex: 1 }}>
						<Grid theme='headerTitle'>Link Stock</Grid>
					</div>
				</Grid>

				<Grid theme='onboardingSlide'>
					<OnboardingSlide />
				</Grid>

				<Grid theme='onboardingButton'>
					<Button theme='startBtn' onClick={handleButtonClick}>
						시작하기
					</Button>
				</Grid>
			</div>
		</>
	);
}

const onboardingWrap = {
	height: '100%',
};

export default Main;
