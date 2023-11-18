import React, { useState } from 'react';
import arrow from "../images/arrow.svg";
import toggle from "../assets/images/toggle.svg";
// import Toggle from "../Toggle"
import { useNavigate } from "react-router-dom";
import { styled, Modal, Box, Typography } from "@mui/material";
import { Grid, Button } from '../components';  // Correct the import for Img

function TopNav() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState("/card");

    const handleButtonClick = (path) => {
        setSelectedButton(path);
        navigate(path);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Grid theme="topNavContainer">
                {/* 뒤로가기 버튼 */}
                <button style={buttonStyle}>
                    <img style={{ width: "13px", height: "26px", marginTop: 7 }} src={arrow} alt="arrow" />
                </button>

                {/* 메뉴 버튼 */}
                <button style={buttonStyle} onClick={openModal}>
                    <img style={{ marginTop: 7 }} src={toggle} alt="toggle" />
                </button>
               
               {/* 모달 창 */}
               <Modal
                    open={isOpen}
                    onClose={closeModal}
                    sx={ModalWrap}
                >
                    <Box sx={ModalStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>

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
const ModalWrap = {
    margin: "0 auto",
    width: "390px",
};

const ModalStyle = {
    height: "695px",
    marginTop: "8px",
    marginLeft: "30%",
    background: "white",
};

export default TopNav;
