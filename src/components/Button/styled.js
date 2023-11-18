import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

const styles = {
  // 헤더
  topNavBtn: {
    textAlign: "center",
    color: "black",
    width: "150px",
    height: "45px",
    fontSize: "18px",
    fontWeight: 700,
  },

  // 회원가입
  signupBtn: {
    color: '#B87514',
    cursor: 'pointer',
    textDecorationLine: 'underline',
    background: '#fff',
    border: 'none',
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
  mainStartBtn: {
    display: 'flex',
    width: '342px',
    padding: '13px',
    margin: '20px 0px',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '8px',
    background: '#88BDE7',
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
  checkBtn: {
    background: '#88BDE7',
    color: '#fff',
    borderRadius: '10px',
    width: '250px',
    padding: '10px',
    margin: '20px 0px',
    '&:hover': {
      background: '#88BDE7',
    },
  },

  // 소비 페이지
  detailBtn: {
    position: "absolute",
    marginTop: "30px",
    marginLeft: "220px",
    width: "85px",
    height: "40px",
    background: "white",
    color: "#88bde7",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
  },
  
  //소비 상세 페이지
  cardWasteList: {
    width: "100%",
  }
  
};

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  ...(styles[theme] || {}),
}));
