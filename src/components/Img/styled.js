import { styled } from '@mui/material';

const styles = {
	//로그인 & 회원가입 페이지
	//헤더
	arrow: {
		width: '13px',
		height: '26px',
		marginTop: 7,
	},
	mainCharacter: {
		width: '50px',
		height: '50px',
	},
	//메인
	main_bg: {
		marginBottom: 0,
	},

	//온보딩
	onboardingImg: {
		width: '300px',
		marginLeft: '20px',
	},
	register: {
		width: '40%',
	},
	main: {
		width: '250px',
	},
	icon: {
		width: '38px',
		height: '38px',
	},
	character: {
		width: '150px',
		marginTop: '50px',
	},
	category_icon: {},
	list_icon: {
		width: '80px',
		height: '80px',
	},
	category_img: {
		width: '20px',
		height: '20px',
	},
	stock_logo: {
		marginTop: '5px',
		width: '40px',
		height: '40px',
	},
	//내 소비 페이지
	arrowBefore: {
		cursor: 'pointer',
		top: '40px',
		left: '15px',
	},
	arrowAfter: {
		cursor: 'pointer',
		top: '40px',
		left: '40px',
	},
	cardShinhanDD: {
		width: '280px',
		marginTop: '10px',
		marginLeft: '55px',
	},

	//내 소비 상세
	arrowBeforeDetail: {
		cursor: 'pointer',
		filter: 'invert(1)',
	},
	arrowAfterDetail: {
		cursor: 'pointer',
		filter: 'invert(1)',
	},
	logout: {
		padding: '20px',
	},
};

export const StyledImg = styled('img')(({ theme }) => ({
	...(styles[theme] || {}),
}));
