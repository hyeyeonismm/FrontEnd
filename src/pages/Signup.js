import { useNavigate } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg';
import register from '../assets/images/register.png';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components';
import CardConsentModal from '../components/CardConsentModal';

function Signup() {
  const navigate = useNavigate();

  const onClickArrow = () => {
    navigate('/login');
  };

  const onClickStart = () => {
    navigate('/login');
  };
  return (
    <>
      <Grid theme="header">
        <Button onClick={onClickArrow}>
          <Img theme="arrow" src={arrow} alt="arrow" />
        </Button>
        <Grid theme="headerTitle">회원가입</Grid>
      </Grid>
      <Grid>
        <Img theme="register" src={register} alt="register" />
      </Grid>

      <Grid theme="registerForm">
        <TextField id="name" label="이름" variant="outlined" size="small" />
        <TextField id="email" label="이메일" variant="outlined" size="small" />
        <TextField id="pw" label="패스워드" variant="outlined" size="small" />
      </Grid>
      <Grid theme="cardGrid">
        <div style={{ fontSize: '14px', color: '#757575' }}>카드내역 연동 동의서</div>
        <CardConsentModal />
      </Grid>

      <Grid theme="startGrid">
        <Button theme="startBtn" children="회원가입" onClick={onClickStart} />
      </Grid>
    </>
  );
}
export default Signup;
