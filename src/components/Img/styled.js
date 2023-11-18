import { styled } from '@mui/material';

const styles = {
  //헤더
  arrow: {
    width: '13px',
    height: '26px',
  },
  mainCharacter: {
    width: "50px",
    height: "50px",
    marginBottom: "80px",
    marginLeft: "-55px"
  },
  //온보딩
  onboardingImg:{
    width: "200px",
    margin: "0 auto"
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
  //내 소비 페이지
  arrowBefore:{
    position: "absolute",
    cursor: "pointer",
    top: "40px",
    left: "15px"
  },
  arrowAfter:{
    position: "absolute",
    cursor: "pointer",
    top: "40px",
    left: "40px"
  },
  cardShinhanDD:{
    width: "280px",
    marginTop: "10px",
    marginLeft: "55px",
  },

  //내 소비 상세
  arrowBeforeDetail:{
    cursor: "pointer",
    filter: "invert(1)",
  },
  arrowAfterDetail:{
    cursor: "pointer",
    filter: "invert(1)",
  },
};

export const StyledImg = styled('img')(({ theme }) => ({
  ...(styles[theme] || {}),
}));
