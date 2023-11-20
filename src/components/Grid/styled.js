import { styled, Grid } from '@mui/material';

const styles = {
	//상단바
	topNavContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '24px 20px 0px 20px',
		alignItems: 'center',
	},
	topNavLine: {
		width: '390px',
		height: '3px',
		marginTop: '5px',
		marginBottom: '30px',
		background: '#FFFDF5;',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
	},
	topNavGrid: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '-8px',
	},
	navSection: {
		marginTop: '40px',
		fontWeight: 700,
	},
	sideBar: {
		width: '50%',
		height: '500px',
		background: 'white',
	},
	sideBarBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: 30,
		width: '250px',
		height: '160px',
		marginTop: '15px',
		marginBottom: '45px',
		padding: '20px 10px 10px 10px',
		borderRadius: '8px',
		border: '1px solid var(--Input-Box-Stroke-Thin, rgba(0, 0, 0, 0.15))',
		boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.10)',
	},
	consumeBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '250px',
		height: '160px',
		marginTop: '15px',
		marginBottom: '45px',
		padding: '5px 10px 10px 5px',
		borderRadius: '8px',
		border: '1px solid var(--Input-Box-Stroke-Thin, rgba(0, 0, 0, 0.15))',
		boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.10)',
	},
	sideBarTxt: {
		display: 'flex',
		flexDirection: 'column',
		gap: 5,
		padding: '0px 10px',
	},
	maintxt: {
		color: '#c0c0c0',
		fontWeight: 'normal',
	},
	subtxt: {
		fontSize: '14px',
		fontWeight: 'normal',
	},
	//온보딩 페이지
	onboardingSlide: {
		padding: '40px 20px',
	},
	onboardingButton: {
		display: 'flex',
		justifyContent: 'center',
		padding: '20px 0px',
	},
	//헤더
	line: {
		width: '390px',
		height: '3px',
		background: '#FFFDF5;',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
	},
	//로그인 페이지
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: '20px 30px 15px 0px',
		borderBottom: '3px solid rgba(235, 243, 252, 0.80)',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
		// display: 'flex',
		// flexDirection: 'row',
		// padding: '24px 20px 15px 20px',
		// alignItems: 'center',
	},
	headerTitle: {
		flex: 0.9,
		marginTop: 6,
		color: '#88BDE7',
		textAlign: 'center',
		fontSize: '28px',
		fontWeight: 700,
		marginRight: '22px',
	},
	loginForm: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '0px 70px',
		gap: 15,
	},
	loginOption: {
		display: 'flex',
		flexDirection: 'row',
		gap: 5,
		fontSize: '14px',
	},
	startGrid: {
		display: 'flex',
		justifyContent: 'center',
		padding: '40px 0px 10px 0px',
	},

	//회원가입 페이지
	registerForm: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '0px 70px',
		gap: 15,
	},

	cardGrid: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px 70px',
		gap: 6,
	},

	// 카드내역 연동 동의 모달
	modal_body: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '360px',
		height: '500px',
		overflowX: 'hidden',
		overflowY: 'auto',
		backgroundColor: 'white',

		boxShadow: '0 10px 50px rgb(70, 70, 70)',
		padding: '0px 30px 10px 30px',
	},
	modal_header: {
		padding: '20px 0px',
		position: 'sticky',
		top: 0,
		background: '#fff',
	},
	modal_section: {
		padding: '10px 0px 30px 0px',
		borderBottom: '2px solid #ddd',
	},
	modal_title: {
		paddingTop: '10px',
		fontSize: 18,
		fontWeight: 800,
	},
	modal_subtitle: {
		fontSize: 16,
		fontWeight: 700,
		marginTop: '20px',
		marginBottom: '5px',
	},
	modal_content: {
		fontSize: '13px',
		color: '#757575',
	},
	modal_btnSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px 0px',
	},

	//메인페이지
	main: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: '80px',
		margin: '0px 20px',
	},
	introTagLine: {
		fontWeight: 600,
	},
	title: {
		textShadow: '0px 1px 2px rgba(0, 0, 0, 0.07)',
		fontSize: '50px',
		fontWeight: 800,
		color: 'transparent',
		background: 'linear-gradient(91deg, #A5D7FF 0.13%, #FAD8E2 60.18%)',
		backgroundClip: 'text',
	},
	description: {
		marginTop: '10px',
		fontSize: '14px',
	},
	main_background: {
		marginTop: '40px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
	},

	// StockMain 페이지
	stockMain_body: {
		margin: '55px 20px 30px 20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	stockMain_content: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		textAlign: 'center',
		alignItems: 'center',
	},
	stockMain_circle: {
		width: '270px',
		height: '270px',
		borderRadius: '270px',
		background: '#EBF3FC',
	},
	stockMain_bigtxt: {
		fontSize: '18px'
	},


	//Category 페이지
	category_body: {
		margin: '20px 20px 0px 20px',
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
	},

	categoryForm: {
		marginTop: '10%',
		borderRadius: '18px',
		border: '0.5px solid #c0c0c0',
		boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
	},
	categoryFont: {
		color: 'black',
		width: '250px',
		textAlign: 'center',
	},
	list_icon: {
		margin: '20px 0px',
		display: 'flex',
		justifyContent: 'center',
	},
	list_grid: {
		display: 'flex',
		flexDirection: 'column',
		gap: 5,
	},
	list_title: {
		paddingBottom: '10px',
		fontSize: '20px',
		fontWeight: 700,
	},
	list_content: {
		marginTop: '5px',
		fontSize: '14px',
	},
	list_tab: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '10px 60px',
		borderBottom: '2px solid #ddd',
	},
	stock_list: {
		height: '310px',
		overflowY: 'scroll',
		scrollbarWidth: 'thin',
		WebkitScrollbar: {
			width: '5px',
		},
		'&::-webkit-scrollbar': {
			width: '5px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#EDEDED', // 스크롤바 색상
			borderRadius: '20px', // 스크롤바 모서리의 둥글기
		},
	},

	category_img: {
		display: 'flex',
		flexDirection: 'row',
	},

	loading_body: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1000,
	},

	//stockInformation 페이지
	stock_nav: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',

		padding: '20px 30px 15px 0px',
	},
	stock_first: {
		display: 'flex',
		flexDirection: 'row',
		gap: 15,
		width: '220px',
	},
	about_stock: {
		padding: '5px 25px 20px 25px',
		display: 'flex',
		flexDirection: 'row',
		gap: 15,
		borderBottom: '1px solid #fffdf5',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
	},
	stock_title: {
		fontWeight: 700,
		fontSize: '18px',
		marginBottom: '4px',
	},
	stock_price: {
		marginRight: '10px',
		marginLeft: '3px',
	},
	stock_inform: {
		display: 'flex',
		flexDirection: 'row',
	},
	stock_subinform: {
		fontSize: '14px',
		color: 'red',
		marginTop: '2px',
	},
	chart: {
		margin: '20px 0px',
		padding: '20px',
	},
	shinhanLink: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
	},
	news_body: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0px 30px',
		gap: 10,
	},
	newsFont: {
		paddingTop: '30px',
		marginBottom: '20px',
		fontSize: '18px',
		fontWeight: 700,
	},

	//소비 페이지
	cardConsumption: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '100px',
		borderRadius: '23px',
		background: '#1D449B',
		margin: '25px',
		filter: 'drop-shadow(0px 0px 18px rgba(0, 0, 0, 0.25))',
	},
	cardSection: {
		display: 'flex',
		flexDirection: 'column',
		gap: 5,
	},
	cardDescription: {
		marginTop: '35px',
		marginLeft: '35px',
		fontSize: '18px',
		fontWeight: '700',
	},
	cardDescriptionSmall: {
		marginTop: '10px',
		marginLeft: '35px',
		fontSize: '15px',
		fontWeight: '500',
	},
	cardDetail: {
		display: 'flex',
		flexDirection: 'row',
		gap: 25,
		marginTop: '30px',
		fontSize: '24px',
		fontWeight: '700',
		color: 'white',
		zIndex: 10,
	},
	smallLine: {
		width: '350px',
		height: '2px',
		background: 'rgba(198, 198, 198, 0.40)',
		margin: '20px 20px 0px 20px',
	},

	//소비상세 페이지
	cardDetailWrap: {
		marginTop: '15px',
		display: 'flex',
		justifyContent: 'left',
	},
	cardDetailDescription: {
		margin: '0 auto',
		fontSize: '18px',
		fontWeight: '700',
	},
	cardDetailDescriptionSmall: {
		marginTop: '8px',
		fontSize: '15px',
		fontWeight: '500',
		textAlign: 'center',
	},
	cardWasteWrap: {
		margin: '25px',
		marginBottom: '90px',
		width: '342px',
		borderRadius: '18px 18px 0px 0px',
		border: '0.5px solid #000',
		background: '#FFF',
		boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
	},
};

export const StyledGrid = styled(Grid)(({ theme }) => ({
	...(styles[theme] || {}),
}));
