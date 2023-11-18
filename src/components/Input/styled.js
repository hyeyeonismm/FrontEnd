import { styled, Input } from '@mui/material';

const styles = {
  // 사이드바 
  searchStock: {
    width: '214px',
    height: '37px',
    padding: '16px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '16px',
    background: 'rgba(190, 190, 190, 0.51)',
    
  },
};

export const StyledInput = styled(Input)(({ theme }) => ({
  ...(styles[theme] || {}),
}));
