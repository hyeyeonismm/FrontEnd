import { useNavigate } from 'react-router-dom';
import Home from '../assets/images/home.svg';
import Wallet from '../assets/images/wallet.svg';
import Crown from '../assets/images/crown.svg';
import { Grid, Img, Button } from '../components';

function Footer() {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate('/main');
  };
  const onClickWallet = () => {
    navigate('/card');
  };
  const onClickCrown = () => {
    navigate('/stock');
  };

  return (
    <>
      <Grid theme="footerWrap">
        <Grid theme="footer">
          <Button theme="icon" onClick={onClickHome}>
            <Img theme="icon" src={Home} alt="home" />
            Home
          </Button>
          <Button theme="icon" onClick={onClickWallet}>
            <Img theme="icon" src={Wallet} alt="wallet" />
            Wallets
          </Button>
          <Button theme="icon" onClick={onClickCrown}>
            <Img theme="icon" src={Crown} alt="crown" />
            주주되기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default Footer;
