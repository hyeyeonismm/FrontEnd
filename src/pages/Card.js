import React, { useState } from 'react';
import { Grid, Button, Img, Input } from '../components';
import TopNav from '../components/TopNav';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg'
import cardShinhanDD from '../assets/images/cardShinhanDD.png'
import Footer from '../components/Footer';
import WasteBar from '../components/WasteBar';

function Card() {
  const [showWaste, setShowWaste] = useState(true);
  const [showDetailWaste, setShowDetailWaste] = useState(false);
  const [showCategoryWaste, setShowCategoryWaste] = useState(false);


  // 예시 데이터
  const userName = "하린";
  const month = "11";
  const money= "111,111";
  const cardName = "신한카드 Deep Dream Platinum+"

  const name = `${userName}님`;
  const wasteMonth = `${month}월`

  const amount = `${money}원`
  const card = `${cardName}`

  
  const percentages = [20, 30, 50];
  const category = ["식비", "패션/쇼핑", "의료/건강", "전기/전자", "금융", "생활", "문화/여가", "교통", "교육"];
  const categoryWaste = ["500", "800", "700", "600", "500", "500", "500", "500", "500"];

  const wasteShop = ["500", "800", "700", "600", "500", "500", "500", "500", "500"];
  const wasteAmount = ["500", "800", "700", "600", "500", "500", "500", "500", "500"];

  



  const handleDetailBtnClick = () => {
    setShowDetailWaste(true);
    setShowWaste(false);
  };

  const handleWasteBtnClick = () => {
    setShowCategoryWaste(true);
    setShowWaste(false);
  };

  

  

  return (
    <>
      {/* Header */}
      <TopNav/>

      {/* 소비&카드 창 */}
      {showWaste &&
        <>
          {/* 달 별 소비 */}
            <Grid theme="cardDescription">{name}의 {wasteMonth} 소비</Grid>
            <Grid theme="cardConsumption">
                <Button>
                    <Img theme="arrowBefore" src={arrowBefore} alt="arrowBefore" />
                </Button>
                <Grid theme="cardAmount">{amount}</Grid> 
                <Button theme="detailBtn" onClick={handleDetailBtnClick} children="상세보기" />
                <Button>
                  <Img theme="arrowAfter" src={arrowAfter} alt="arrowAfter" />
                </Button>
            </Grid>
            <Grid theme="smallLine"/>
            {/* 보유 카드 */}
            <Grid theme="cardDescription">보유 카드</Grid>
            <Grid theme="cardDescriptionSmall">{card}</Grid>
            <Img theme="cardShinhanDD" src={cardShinhanDD} alt="cardShinhanDD" />
        </>
      }

      {/* 상세보기 버튼 클릭 시에 카테고리 소비창 */}
      {showDetailWaste &&
        <>
          <Grid theme="cardDetailWrap">
            <Button>
                  <Img theme="arrowBeforeDetail" src={arrowBefore} alt="arrowBeforeDetail" />
              </Button>
                <Grid theme="cardDetailDescription">{wasteMonth} 소비</Grid>
              <Button>
                <Img theme="arrowAfterDetail" src={arrowAfter} alt="arrowAfterDetail" />
              </Button>
          </Grid>
          <Grid theme="cardDetailDescriptionSmall">{amount}</Grid>
          
          {/* 카테고리 클릭 시에 세부 내역 */}
          {showCategoryWaste ? (
            <>
              <Grid theme="cardWasteWrap">
                {/* Display the list for each category */}
                {wasteShop.map((cat, index) => (
                  <Button theme="cardWasteList" key={index}>
                    <div style={cardWaste}>
                      {/* 카테고리별 사진 매핑 */}
                      {/* <Img src={`${cat}.png`} alt={cat} />  */}
                      <div style={cardWasteCategory}> {cat} </div>
                      <div style={cardWasteAmount}> {wasteAmount[index]}원 </div>
                    </div>
                  </Button>
                ))}
              </Grid>
            </>
          ) : (
          <>
            <WasteBar/>
            <Grid theme="cardWasteWrap">
              {/* Display the list for each category */}
              {category.map((cat, index) => (
                <Button theme="cardWasteList" key={index} onClick={handleWasteBtnClick}>
                  <div style={cardWaste}>
                    {/* 카테고리별 사진 매핑 */}
                    {/* <Img src={`${cat}.png`} alt={cat} />  */}
                    <div style={cardWasteCategory}> {cat} </div>
                    <div style={cardWasteAmount}> {categoryWaste[index]}원 </div>
                  </div>
                </Button>
              ))}
            </Grid>
          </>
        )}
      </>
      }
      {/* Footer */}
      <Footer/>
    </>
  );
  
}

const cardWaste = {
  display: 'flex',
  justifyContent: 'space-between'
}

const cardWasteCategory = {
  padding: '10px',
  width: '200px',
  textAlign: 'left',
  color: 'black'
};

const cardWasteAmount = {
  width: '70px',
  height: '25px',
  margin: '10px',
  textAlign: 'center',
  color: 'grey',
  backgroundColor: '#EBF3FC',
  borderRadius: '5px'
};

export default Card;
