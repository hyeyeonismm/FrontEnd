import register from "../images/main_sol.png";
import {Grid, Button, TextField, styled} from "@mui/material";

function Main(){

    return(
        <>
        <div style={{background: "#1D449B"}}>
            <Grid sx={{display: "flex", flexDirection: "row", padding: "44px 20px 15px 20px", alignItems: "center", }}>
                <Grid container sx={{justifyContent: "center", flex: 1}}>
                <HeaderGrid>Seed Stock</HeaderGrid>
                </Grid>
            </Grid>
            <Grid>
                <Line />
                <img style={{display: "block", margin: "20%"}} src={register} alt="register" />
            </Grid>

            <Grid sx={{display: "flex", justifyContent: "center", padding: "40px 0px"}}>
                <StartButton>시작하기</StartButton>
            </Grid>
        </div>
        </>
    )
}

  
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
  
  const StartButton = styled(Button)(() => ({
    textAlign: "center",
    background: "white",
    color: "#88bde7",
    borderRadius: "12px",
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.25)",
    width: "200px",
    height: "45px",
    fontSize: "18px",
    fontWeight: 700,
}));

export default Main;