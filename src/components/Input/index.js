import React from 'react';
import { StyledInput } from './styled';

const Input = ({ theme, children }) => {
  return <StyledInput theme={theme}>{children}</StyledInput>;
};

export default Input;
