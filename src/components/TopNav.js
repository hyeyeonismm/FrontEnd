import React, { useState } from 'react';
import arrow from '../assets/images/arrow.svg';
import Toggle from '../components/Toggle';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, styled } from '@mui/material';

function TopNav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState('/card');

  const toggleSide = () => {
    setIsOpen(true);
  };

  const handleButtonClick = (path) => {
    setSelectedButton(path);
    navigate(path);
  };

  return (
    <>
      <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '44px 20px 15px 20px', alignItems: 'center' }}>
        <button style={buttonStyle}>
          <img style={{ width: '13px', height: '26px', marginTop: 7 }} src={arrow} alt="arrow" />
        </button>
        <Toggle role="button" onClick={toggleSide} />
      </Grid>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: '30px',
          marginRight: '30px',
        }}
      >
        <NavButton onClick={() => handleButtonClick('/card')} selected={selectedButton === '/consumption'}>
          내 소비
        </NavButton>
        <NavButton onClick={() => handleButtonClick('/stock')} selected={selectedButton === '/stock'}>
          주주되기
        </NavButton>
      </div>
      <Line />
    </>
  );
}

const buttonStyle = {
  background: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const Line = styled('div')({
  width: '390px',
  height: '3px',
  background: '#FFFDF5;',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

const NavButton = styled(Button)(() => ({
  textAlign: 'center',
  color: 'black',
  width: '150px',
  height: '45px',
  fontSize: '18px',
  fontWeight: 700,
}));

export default TopNav;
