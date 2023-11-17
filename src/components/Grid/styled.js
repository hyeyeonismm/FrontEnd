import { styled, Grid } from '@mui/material';

const styles = {
  //로그인 페이지
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '20px 30px 15px 0px',
    borderBottom: '3px solid rgba(235, 243, 252, 0.80)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
  },
  headerTitle: {
    color: '#88BDE7',
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 700,
    flex: 0.9,
    marginTop: 6,
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
    padding: '40px 0px',
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
  body: {
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
    paddingTop: '130px',
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
    fontSize: '13px',
  },
  background: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

  // Stock 페이지
  stock_body: {
    margin: '55px 20px 30px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stockOne_body: {
    margin: '55px 20px 0px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  //카테고리
  category_body: {
    height: '380px',
    marginTop: '20px',
    borderRadius: '18px',
    border: '0.5px solid #c0c0c0',
    boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
  },
  category_font: {
    color: 'black',
    fontWeight: 700,
    fontSize: '16px',
    width: '100px',
    textAlign: 'left',
  },
  list_icon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
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
    fontSize: '14px',
    color: '#757575',
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
  },

  category_img: {
    display: 'flex',
    flexDirection: 'row',
  },
  stock_nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '44px 20px 15px 0px',
  },
  about_stock: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
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
    padding: '0px 40px',
    gap: 10,
  },
  newsFont: {
    paddingTop: '30px',
    fontSize: '18px',
    fontWeight: 700,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  circle: {
    width: '270px',
    height: '270px',
    borderRadius: '270px',
    background: '#EBF3FC',
  },
  footerWrap: {
    position: 'relative',
    minHeight: '100%',
    paddingBottom: '114px',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '80px',
    marginTop: '20px',
    boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.25)',
  },
};

export const StyledGrid = styled(Grid)(({ theme }) => ({
  ...(styles[theme] || {}),
}));
