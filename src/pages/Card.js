import React, { useState } from 'react';
import arrow from "../images/arrow.svg";
import register from "../images/register.png";
import consumSol from "../images/consumSol.png"
import Toggle from "../components/Toggle"

import { useNavigate } from "react-router-dom";
import {Grid, Button, TextField, styled} from "@mui/material";
import TopNav from '../components/TopNav';

function Card() {
    const navigate = useNavigate();

  return (
    <>
      <TopNav/>

      <Grid>
      <Consumption/>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none"
      style={{
        position: "relative",
        cursor: "pointer",
        top: "-85",
        left: "37"
      }}>
        <path d="M8.20414 0.0337409C8.12676 0.057203 7.99557 0.10706 7.91819 0.148119C7.83745 0.189177 6.06795 1.71128 3.98559 3.53253C0.611421 6.47995 0.190911 6.85828 0.12363 6.99612C-0.0412099 7.34512 -0.0412099 7.65599 0.12363 8.00499C0.190911 8.14283 0.614785 8.52409 4.00241 11.4832C8.38243 15.3076 7.96865 14.9938 8.63138 14.9938C8.99133 14.9938 9.0317 14.9879 9.22009 14.9087C9.76507 14.6741 10.0847 14.1374 9.98037 13.633C9.8929 13.2136 10.0544 13.369 6.54901 10.3072L3.33296 7.50055L6.54901 4.69097C10.0544 1.6321 9.8929 1.78753 9.98037 1.36815C10.0847 0.863713 9.76507 0.324084 9.22009 0.0953289C9.04516 0.0190771 8.97788 0.00734605 8.68184 0.00148052C8.46654 -0.004385 8.29497 0.00734605 8.20414 0.0337409Z" fill="white"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"
      style={{
        position: "relative",
        cursor: "pointer",
        top: "-85",
        left: "338"
      }}>
        <path d="M2.23486 14.9663C2.30981 14.9428 2.4369 14.8929 2.51185 14.8519C2.59006 14.8108 4.30416 13.2887 6.32133 11.4675C9.58985 8.52005 9.99719 8.14172 10.0624 8.00388C10.222 7.65488 10.222 7.34401 10.0624 6.99501C9.99719 6.85717 9.58659 6.47591 6.30503 3.51675C2.06215 -0.30757 2.46297 0.00623598 1.821 0.00623593C1.47231 0.00623591 1.43321 0.0121014 1.25072 0.091286C0.722802 0.325907 0.413221 0.862602 0.514242 1.36704C0.59897 1.78642 0.44255 1.63099 3.83816 4.69279L6.95352 7.49944L3.83816 10.309C0.442549 13.3679 0.598969 13.2125 0.514241 13.6318C0.41322 14.1363 0.722801 14.6759 1.25072 14.9047C1.42017 14.9809 1.48535 14.9927 1.77212 14.9985C1.98068 15.0044 2.14687 14.9927 2.23486 14.9663Z" fill="white"/>
      </svg>
      <DetailButton 
      style={{
        position: "relative",
        cursor: "pointer",
        top: "-90px",
        left: "230px"
      }}>상세보기</DetailButton>
      </Grid>
    </>
  );
}

const Consumption = styled(Grid)({
  width: "343px",
  height: "100px",
  borderRadius: "25px",
  background: "#1D449B",
  margin: "25px"
});

const DetailButton = styled(Button)(() => ({
  textAlign: "center",
  background: "white",
  color: "#88bde7",
  borderRadius: "20px",
  boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.25)",
  width: "85px",
  height: "40px",
  fontSize: "16px",
  fontWeight: 700
}));


export default Card;
