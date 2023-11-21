import { useNavigate } from 'react-router-dom';
import { Grid, Img, Button } from '../index.js';
import TopNav from '../TopNav.js';
import mainCharacter from '../../assets/images/mainCharacter.png';

function StockTopNav() {
	const navigate = useNavigate();
	const onClickCard = () => {
		navigate('/card');
	};

	// 뒤로가기 버튼 클릭 시의 동작
	const handleBackButtonClick = () => {
		navigate('/stock');
	};

	return (
		<>
			<TopNav onBackButtonClick={handleBackButtonClick} />
			<Grid theme='topNavGrid'>
				<Button theme='topNavBtn' onClick={onClickCard}>
					<Grid>내 소비</Grid>
				</Button>

				<Button theme='selectedBtn'>
					<Img theme='mainCharacter' src={mainCharacter} alt='mainCharacter' />
					<Grid>주주되기</Grid>
				</Button>
			</Grid>
			<Grid theme='topNavLine' />
		</>
	);
}
export default StockTopNav;
