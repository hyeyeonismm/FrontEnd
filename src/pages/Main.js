import React, { useState } from 'react';
import Slider from 'react-slick';
import OnbordingSlide from "../components/OnbordingSlide";
import register from "../images/main_sol.png";
import {Grid, Button, TextField, styled} from "@mui/material";

function Main(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        // Logic to go to the next slide
        setCurrentSlide(currentSlide + 1);
      };

    const slides = [
        {
            image : register, 
            title : 'register', 
            description : 'first'
        },
        {
            image : register, 
            title : 'register', 
            description : 'se'
        },
        {
            image : register, 
            title : 'register', 
            description : 'th'
        }
    ]




    return(
        <>
        <div style={{background: "#1D449B"}}>
            <Grid sx={{display: "flex", flexDirection: "row", padding: "44px 20px 15px 20px", alignItems: "center"}}>
                <Grid container sx={{justifyContent: "center", flex: 1}}>
                <HeaderGrid>Seed Stock</HeaderGrid>
                </Grid>
            </Grid>

            <Grid>
                <Line />
                {/* <img style={{display: "block", margin: "20%"}} src={register} alt="register" /> */}
                <OnbordingSlide/>
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

const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
const NextButton = styled(Button)(() => ({
    marginTop: "20px",
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}));

export default Main;