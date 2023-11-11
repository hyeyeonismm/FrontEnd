import React, { useState } from 'react';
import arrow from "../images/arrow.svg";
import register from "../images/register.png";
import consumSol from "../images/consumSol.png"
import Toggle from "../components/Toggle"
import { useNavigate } from "react-router-dom";
import {Grid, Button, TextField, styled} from "@mui/material";

function Consumption() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleSide = () => {    
        setIsOpen(true);  
    };

  return (
    <>
      <Grid sx={{display: "flex", flexDirection: "row", justifyContent: "space-between",padding: "44px 20px 15px 20px", alignItems: "center"}}>
        <button style={buttonStyle}>
          <img style={{width: "13px", height: "26px", marginTop: 7}} src={arrow} alt="arrow" />
        </button>
        <Toggle role="button" onClick={toggleSide}/>
      </Grid>

      <Grid >
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginLeft: "30px", marginRight: "30px"}}>
            <NavButton onClick={() => navigate("/consumption")}>내 소비</NavButton>
            <NavButton onClick={() => navigate("/")}>주주되기</NavButton>
        </div>
        <Line />
      </Grid>

      <Grid>
        <h4>소비자에서 주주가 되어봅시다!</h4>
        <h2>`${}님과 밀접한 종목은?`</h2>
        <img src={consumSol} alt="register" />
      </Grid>

      <Grid sx={{display: "flex", justifyContent: "center", padding: "40px 0px"}}>
                <StartButton >시작하기</StartButton>
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
  background: "#FFFDF5;",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
});


const NavButton = styled(Button)(() => ({
  textAlign: "center",
  color: "black",
  width: "150px",
  height: "45px",
  fontSize: "18px",
  fontWeight: 700,
}));

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

export default Consumption;
