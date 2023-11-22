import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

const styles = {
	// 헤더
	topNavBtn: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		color: 'black',
		width: '150px',
		paddingTop: '50px',
		height: '80px',
		fontSize: '18px',
		fontWeight: 700,
	},
	black: {
		marginRight: '10px',
		color: 'black',
	},
	selectedBtn: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		color: '#88BDE7',
		width: '150px',
		height: '80px',
		fontSize: '18px',
		fontWeight: 700,
	},
	home: {
		marginRight: '60px',
	},
	headerTitle: {
		marginTop: 6,
		color: '#88BDE7',
		textAlign: 'center',
		fontSize: '28px',
		fontWeight: 700,
		width: '300px',
	},
	// 회원가입
	signupBtn: {
		color: '#B87514',
		cursor: 'pointer',
		textDecorationLine: 'underline',
		background: '#fff',
		border: 'none',
		paddingTop: 0,
	},
	startBtn: {
		display: 'flex',
		textAlign: 'center',
		justifyContent: 'center',
		color: '#88bde7',
		background: 'white',
		borderRadius: '12px',
		boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.25)',
		width: '200px',
		height: '45px',
		fontSize: '18px',
		fontWeight: 700,
	},
	emailcheckBtn: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 'px 10px',
		backgroundColor: '#88bde7',
		color: '#fff',
		'&:hover': {
			background: '#88BDE7',
		},
	},

	mainStartBtn: {
		display: 'flex',
		width: '280px',
		padding: '13px',
		margin: '20px 0px',
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		borderRadius: '8px',
		background: '#A3C7F7',
		color: '#fff',
		'&:hover': {
			background: '#88BDE7',
		},
	},
	icon: {
		height: '80px',
		display: 'flex',
		flexDirection: 'column',
		color: '#88BDE7',
		textAlign: 'center',
		fontSize: '12px',
	},
	// Stock 페이지
	checkBtn: {
		background: '#88BDE7',
		color: '#fff',
		borderRadius: '10px',
		width: '250px',
		padding: '10px',
		marginTop: '20px',
		'&:hover': {
			background: '#88BDE7',
		},
	},
	cardBtn: {
		width: '250px',
		height: '40px',
		border: '1px solid #c4c4c4',
		color: '#757575',
		justifyContent: 'flex-start',
	},

	categoryBtn: {
		gap: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		margin: '10px',
		width: '94%',
		height: '64px',
		padding: '0px 10px',
		color: '#000',
	},
	marketCapBtn: {
		gap: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		margin: '10px',
		width: '94%',
		height: '64px',
		padding: '0px 10px',
		color: '#000',
		marginLeft: '35px',
	},
	shinhanLinkBtn: {
		padding: '10px 15px',
		color: '#fff',
		background: '#88BDE7',
		'&:hover': {
			background: '#88BDE7',
		},
	},
	showBtn: {
		width: '130px',
		height: '40px',
		margin: '8px 0px 0px 20px',
		color: '#fff',
		background: '#88BDE7',
		'&:hover': {
			background: '#88BDE7',
		},
	},
	newsBtn: {
		borderRadius: 0,
		display: 'flex',
		justifyContent: 'flex-start',
		textAlign: 'left',
		height: '60px',
		width: '330px',
		color: '#575757',
		borderTop: '1px solid #ddd',
	},

	// 소비 페이지
	detailBtn: {
		width: '80px',
		height: '40px',
		background: 'white',
		color: '#000',
		borderRadius: '20px',
		boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.25)',
		textAlign: 'left',
		fontSize: '15px',
		fontWeight: 700,
		marginLeft: '10px',
		cursor: 'pointer',
		'&:hover': {
			background: '#fff',
		},
	},

	//소비 상세 페이지
	cardWasteList: {
		width: '100%',
	},
	sidebarBtn: {
		margin: '0',
		color: '#757575',
		width: '10px',
	},
	cardArrowBtn: {
		display: 'flex',
		minWidth: '40px',
	},
	//마이페이지
	logout: {
		padding: 0,
		marginLeft: '125px',
	},
};

export const StyledButton = styled(MuiButton)(({ theme }) => ({
	...(styles[theme] || {}),
}));
