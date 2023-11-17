import { styled, Input } from '@mui/material';

const styles = {
  //소비 상세 페이지
  cardWasteCategory:{

  },
  cardWasteAmount:{
    textAlign: "left"

  },


};

export const StyledInput = styled(Input)(({ theme }) => ({
  ...(styles[theme] || {}),
}));
