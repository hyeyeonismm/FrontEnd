import React from 'react';
import { StyledButton } from './styled';

const Button = ({ theme, onClick, children, clicked }) => {
  return (
    <StyledButton theme={theme} onClick={onClick} clicked={clicked}>
      {children}
    </StyledButton>
  );
};

export default Button;
