import React, { useState } from 'react';
import arrow from "../images/arrow.svg";
import toggle from "../assets/images/toggle.svg"
// import Toggle from "../Toggle"
import { useNavigate } from "react-router-dom";
import { styled, Modal } from "@mui/material";
import { Grid, Button, Img, Input } from '../components';


function TopNav() {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState("/card"); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    


    const handleButtonClick = (path) => {
        setSelectedButton(path);
        navigate(path);
    };



    return (
        <>
            <Grid theme="topNavContainer">
                <button style={buttonStyle}>
                    <img style={{ width: "13px", height: "26px", marginTop: 7 }} src={arrow} alt="arrow" />
                </button>
                {/* <Toggle role="button" onClick={toggleSide} /> */}
                <button style={buttonStyle}  onClick={openModal}>
                    <img style={{marginTop: 7 }} src={toggle} alt="toggle" />
                </button>
                <Modal style={modalStyle} open={openModal} onClose={closeModal}/>
            </Grid>


                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginLeft: "30px", marginRight: "30px" }}>
                    <Button theme="topNavBtn" onClick={() => handleButtonClick("/card")} selected={selectedButton === "/consumption"}>내 소비</Button>
                    <Button theme="topNavBtn" onClick={() => handleButtonClick("/stock")} selected={selectedButton === "/stock"}>주주되기</Button>
                </div>
                <Grid theme="topNavLine" />

        </>
    );
}

const buttonStyle = {
    background: "#fff",
    border: "none",
    cursor: "pointer",
};

const modalStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100%",
    width: "300px",
    background: "#fff",
    zIndex: 9999
}




export default TopNav;
