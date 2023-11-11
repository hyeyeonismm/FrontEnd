import arrow from "../images/arrow.svg";
import register from "../images/register.png";
import {Grid, Button, TextField, styled} from "@mui/material";

function Login() {
  return (
    <>
      <Grid sx={{display: "flex", flexDirection: "row", padding: "44px 20px 15px 20px", alignItems: "center"}}>
        <button style={buttonStyle}>
          <img style={{width: "13px", height: "26px", marginTop: 7}} src={arrow} alt="arrow" />
        </button>
        <Grid container sx={{justifyContent: "center", flex: 1}}>
          <HeaderGrid>로그인</HeaderGrid>
        </Grid>
      </Grid>

      <Grid>
        <Line />
        <img style={{width: "342px", height: "214px", margin: "60px 24px"}} src={register} alt="register" />
      </Grid>

      <LoginForm>
        <TextField id="id" label="아이디" variant="outlined" size="small" />
        <TextField id="pw" label="패스워드" variant="outlined" size="small" />
        <Grid style={{display: "flex", flexDirection: "row", gap: 5, fontSize: "14px"}}>
          <div style={{color: "#757575"}}>계정이 없으신가요?</div>
          <button style={{color: "#B87514", cursor: "pointer", textDecorationLine: "underline", background: "#fff", border: "none"}}>회원가입</button>
        </Grid>
      </LoginForm>

      <Grid sx={{display: "flex", justifyContent: "center", padding: "40px 0px"}}>
        <StartButton>시작하기</StartButton>
      </Grid>
    </>
  );
}

const buttonStyle = {
  background: "#fff",
  border: "none",
  cursor: "pointer",
};

const HeaderGrid = styled(Grid)({
  color: "#88BDE7",
  textAlign: "center",
  fontSize: "28px",
  fontWeight: 700,
  marginRight: "22px",
});

const Line = styled("div")({
  width: "390px",
  height: "3px",
  background: "rgba(235, 243, 252, 0.80)",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
});

const LoginForm = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0px 70px",
  gap: 15,
}));

const StartButton = styled(Button)(() => ({
  textAlign: "center",
  color: "#88bde7",
  borderRadius: "12px",
  boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.25)",
  width: "200px",
  height: "45px",
  fontSize: "18px",
  fontWeight: 700,
}));
export default Login;
