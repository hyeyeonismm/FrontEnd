import { styled, Grid } from '@mui/material';

const styles = {
  //상단바
  topNavContainer: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    padding: "44px 20px 15px 20px", 
    alignItems: "center"
  },
  topNavLine: {
    width: "390px",
    height: "3px",
    background: "#FFFDF5;",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  sideBar: {
    width: "50%",
    height: "500px",
    background: "white",
  },
  sideBarBox: {
    width: "250px",
    height: "140px",
    margin: "0 auto",
    marginTop: "13px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "2px solid var(--Input-Box-Stroke-Thin, rgba(0, 0, 0, 0.15))",
    boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.10)"
  },
  //헤더
  line: {
    width: "390px",
    height: "3px",
    background: "#FFFDF5;",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  //로그인 페이지
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: '28px 20px 20px 20px',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#88BDE7',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 700,
    marginRight: '25px',
  },
  line: {
    width: '390px',
    height: '3px',
    background: 'rgba(235, 243, 252, 0.80)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
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

  //메인페이지
  main: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '130px',
    paddingLeft: '22px',
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
  // 하단바
  footerWrap: {
    position: "fixed",
    bottom: 0,
    width: "390px",
    height: "160px",
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxShadow: '0px 5px 18px rgba(0, 0, 0, 0.25)',
    background: 'white'
  },
  
  //소비 페이지
  cardConsumption : {
    display: "flex",
    justifyContent: "space-between",
    width: "343px",
    height: "100px",
    borderRadius: "23px",
    background: "#1D449B",
    margin: "25px",
    filter: "drop-shadow(0px 0px 18px rgba(0, 0, 0, 0.25))",
  },
  cardDescription :{
    marginTop:"35px",
    marginLeft: "35px",
    fontSize: "20px",
    fontWeight: "900",
  },
  cardDescriptionSmall :{
    marginTop:"10px",
    marginLeft: "35px",
    fontSize: "15px",
    fontWeight: "500",
  },
  cardAmount :{
    marginTop: "30px",
    marginRight: "90px",
    fontSize: "25px",
    fontWeight: "1000",
    color:"white",
  },
  smallLine :{
    width: "350px",
    height: "2px",
    background: "rgba(198, 198, 198, 0.40)",
    margin : "20px"
  },

  //소비상세 페이지
  cardDetailWrap :{
    marginTop: "40px",
    display: "flex",
    justifyContent: "left",
  },
  cardDetailDescription :{
    fontSize: "18px",
    fontWeight: "700",
  },
  cardDetailDescriptionSmall :{
    marginTop: "10px",
    marginLeft: "55px",
    fontSize: "18px",
    fontWeight: "500",
  },
  cardWasteWrap: {
    margin: "25px",
    marginBottom: "90px",
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
