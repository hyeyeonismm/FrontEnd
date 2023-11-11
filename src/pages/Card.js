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
    const [isOpen, setIsOpen] = useState(false);
    const toggleSide = () => {    
        setIsOpen(true);  
    };

  return (
    <>
      <TopNav/>
      <Grid>
        <h2>dd</h2>
      </Grid>
    </>
  );
}




export default Card;
