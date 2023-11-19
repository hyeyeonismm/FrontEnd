import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components/index.js';
import main from '../assets/images/mainCharacter.png';
import main_bg from '../assets/images/main_bg.png';
import Footer from '../components/Footer.js';

function Main() {
  return (
    <>
      <Grid theme="main">
        <Grid theme="introTagLine">소비 데이터 기반 주식 추천 서비스</Grid>
        <Grid theme="title">SeedStock</Grid>
        <Grid theme="description">평범한 일상 속에서 개인화된 주식 투자 기회를 제안합니다.</Grid>
      </Grid>
      <Grid theme="main_background">
        <Img theme="main" src={main} alt="main" />
        <Button theme="mainStartBtn" children="시작하기" />
      </Grid>
      <Footer />
    </>
  );
}
export default Main;
