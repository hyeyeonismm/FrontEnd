import { useNavigate } from 'react-router-dom';
import Home from '../images/home.svg';
import Wallet from '../images/wallet.svg';
import Crown from '../images/crown.svg';
import Character from '../images/character.png';
import { Grid, Img, Button } from '../components';
import Footer from '../components/Footer.js';

function Shareholder() {
  return (
    <>
      <Grid>
        <Grid>소비자에서 주주가 되어봅시다.</Grid>
        <Grid>ㅇㅇㅇ님과 밀접한 종목을 알아볼까요?</Grid>
      </Grid>
      <Grid theme="content">
        <Grid theme="circle">
          <Img theme="character" src={Character} alt="character"></Img>
        </Grid>
        <Button theme="checkBtn" children="확인하기" />
      </Grid>
      <Footer />
    </>
  );
}
export default Shareholder;
