import { styled } from '@mui/material';

const styles = {
  arrow: {
    width: '13px',
    height: '26px',
    marginTop: 7,
  },
  register: {
    width: '342px',
    height: '214px',
    margin: '60px 24px',
  },
  main: {
    width: '162.814px',
    height: '170px',
  },
  icon: {
    width: '38px',
    height: '38px',
  },
  character: {
    width: '100px',
    height: '120px',
    marginTop: '75px',
  },
  category_icon: {
    width: '40px',
    height: '40px',
  },
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
};

export const StyledImg = styled('img')(({ theme }) => ({
  ...(styles[theme] || {}),
}));
