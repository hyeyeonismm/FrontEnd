import { useNavigate } from 'react-router-dom';
import arrow from '../images/arrow.svg';
import register from '../images/register.png';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components';

function Signup() {
  const navigate = useNavigate();

  const onClickArrow = () => {
    navigate('/login');
  };

  const onClickStart = () => {
    navigate('/main');
  };
  return (
    <>
      <Grid theme="header">
        <Button onClick={onClickArrow}>
          <Img theme="arrow" src={arrow} alt="arrow" />
        </Button>
        <Grid theme="title">회원가입</Grid>
      </Grid>
      <Grid>
        <Grid theme="line" />
        <Img theme="register" src={register} alt="register" />
      </Grid>

      <Grid theme="registerForm">
        <TextField id="name" label="이름" variant="outlined" size="small" />
        <TextField id="email" label="이메일" variant="outlined" size="small" />
        <TextField id="pw" label="패스워드" variant="outlined" size="small" />
        <div style={{ color: '#757575' }}>카드내역 연동 동의서</div>
      </Grid>

      <Grid theme="startGrid">
        <Button theme="startBtn" children="회원가입" onClick={onClickStart} />
      </Grid>
    </>
  );
}
export default Signup;
