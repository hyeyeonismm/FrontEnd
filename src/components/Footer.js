// Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0; /* Adjust the background color as needed */
  padding: 20px;
  margin-top: 30px;
  text-align: left;
  font-size: 12px
`;

const Footer = () => {
  return (
    <FooterContainer>
    <p>&copy; 2023 Link Stock. All rights reserved.</p>
    <p>
      신한 카드 데이터를 기반으로 하는 종목 추천 서비스<br />
      카드 소비 내역을 분석하여 취향에 맞는 투자 추천
    </p>
    <p>
      고객센터: link@linkstock.com | 전화: 010-4564-7890
    </p>
    {/* Add any additional links or information as needed */}
  </FooterContainer>
  );
};

export default Footer;
