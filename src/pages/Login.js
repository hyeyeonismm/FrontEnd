import { useNavigate } from 'react-router-dom';
import arrow from '../images/arrow.svg';
import register from '../images/register.png';
import { TextField } from '@mui/material';
import { Grid, Button, Img } from '../components';

function Login() {
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <Grid theme="header">
        <Button>
          <Img theme="arrow" src={arrow} alt="arrow" />
        </Button>
        <Grid theme="headerTitle">로그인</Grid>
      </Grid>

      <Grid>
        <Grid theme="line" />
        <Img theme="register" src={register} alt="register" />
      </Grid>

      <Grid theme="loginForm">
        <TextField id="id" label="아이디" variant="outlined" size="small" />
        <TextField id="pw" label="패스워드" variant="outlined" size="small" />
        <Grid theme="loginOption">
          <div style={{ color: '#757575' }}>계정이 없으신가요?</div>
          <Button theme="signupBtn" children="회원가입" onClick={onClickSignup} />
        </Grid>
      </Grid>

      <Grid theme="startGrid">
        <Button theme="startBtn" children="시작하기" />
      </Grid>
    </>
  );
}

export default Login;
