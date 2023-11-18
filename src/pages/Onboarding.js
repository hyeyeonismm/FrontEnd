import React, { useState } from 'react';
import Slider from 'react-slick';
import OnboardingSlide from "../components/OnboardingSlide";
import { useNavigate } from "react-router-dom";
import {Grid, TextField, styled} from "@mui/material";
import {Button} from "../components";

function Onboarding(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/login")
      };


    return(
        <>
        <div style={onboardingWrap}>
            <Grid sx={{display: "flex", flexDirection: "row", padding: "44px 20px 15px 20px", alignItems: "center"}}>
                <Grid container sx={{justifyContent: "center", flex: 1}}>
                <HeaderGrid>Seed Stock</HeaderGrid>
                </Grid>
            </Grid>

            <Grid>
                <Line />
                <OnboardingSlide/>
            </Grid>

            <Grid sx={{display: "flex", justifyContent: "center", padding: "40px 0px"}}>
                <Button theme="startBtn" onClick={handleButtonClick} >시작하기</Button>
            </Grid>

            
        </div>
        </>
    )
}

  const onboardingWrap = {
    backgroundColor: "#1D449B",
    height: "100%"
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
  


export default Onboarding;