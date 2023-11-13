import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

const styles = {
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
  cardBtn: {
    width: '250px',
    height: '40px',
    border: '1px solid #c4c4c4',
    color: '#757575',
    justifyContent: 'flex-start',
    paddingLeft: '10px',
    gap: 5,
  },
};

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  ...(styles[theme] || {}),
}));
