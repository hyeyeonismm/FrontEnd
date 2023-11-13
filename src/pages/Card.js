import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Button, Img } from '../components';
import TopNav from '../components/TopNav';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg'
import cardShinhanDD from '../assets/images/cardShinhanDD.png'
import Footer from '../components/Footer';

function Card() {
  const navigate = useNavigate();
  // 예시 데이터
  const userName = "하린";
  const month = "11";
  const money= "111,111";
  const cardName = "신한카드 Deep Dream Platinum+"

  const description = `${userName}님의 ${month}월 소비`;
  const amount = `${money}원`
  const card = `${cardName}`
  

  return (
    <>
      {/* Header */}
      <TopNav/>

      {/* 달 별 소비 */}
      <Grid theme="cardDescription">{description}</Grid>
      <Grid theme="cardConsumption">
        <Button>
            <Img theme="arrowBefore" src={arrowBefore} alt="arrowBefore" />
        </Button>
        <Grid theme="cardAmount">{amount}</Grid> 
        <Button theme="detailBtn" children="상세보기" />
        <Button>
          <Img theme="arrowAfter" src={arrowAfter} alt="arrowAfter" />
        </Button>
      </Grid>

      {/* 보유 카드 */}
      <Grid theme="cardDescription">보유 카드</Grid>
      <Grid theme="cardDescriptionSmall">{card}</Grid>
      <Img theme="cardShinhanDD" src={cardShinhanDD} alt="cardShinhanDD" />

      <Grid theme="cardDescription">보유 카드</Grid>
      <Grid theme="cardDescriptionSmall">{card}</Grid>
      <Grid theme="cardDescription">보유 카드</Grid>
      <Grid theme="cardDescriptionSmall">{card}</Grid>
      <Grid theme="cardDescription">보유 카드</Grid>
      <Grid theme="cardDescriptionSmall">{card}</Grid>
      <Grid theme="cardDescription">보유 카드</Grid>
      <Grid theme="cardDescriptionSmall">{card}</Grid>
      

      {/* Footer */}
      <Footer/>
      
      
    </>
  );
}


export default Card;
