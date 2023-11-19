import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../TopNav';
import Footer from '../Footer';
import { Grid, Img, Button } from '../index.js';

function StockList() {
  return (
    <>
      <TopNav />
      <Grid theme="stockOne_body">
        <Grid theme="modal_title">엔터</Grid>
        <Grid>
          김혜연님의 소비 데이터를 기반으로
          <br />
          상위 5개의 카테고리를 추천했어요.
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
export default StockList;
