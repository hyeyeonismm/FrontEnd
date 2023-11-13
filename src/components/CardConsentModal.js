import React, { useState } from 'react';
import { styled, Modal } from '@mui/material';
import { Button, Img, Grid } from '../components';
import Close from '@mui/icons-material/CloseRounded';
import check from '../images/check.png';

function CardConsentModal() {
  const [open, setOpen] = useState(false);
  const [selectedFirstBtn, setSelectedFirstBtn] = useState(false);
  const [selectedSecondBtn, setSelectedSecondBtn] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickFirstBtn = () => {
    setSelectedFirstBtn((current) => !current);
  };

  const onClickSecondBtn = () => {
    setSelectedSecondBtn((current) => !current);
  };

  const firstBtnStyle = {
    padding: '10px',
    width: '230px',
    border: '1px solid #c4c4c4',
    borderRadius: '5px',
    margin: '5px 0px',
    background: selectedFirstBtn ? '#88BDE7' : 'transparent',
    color: selectedFirstBtn ? '#fff' : '#757575',
    cursor: 'pointer',
  };
  const secondBtnStyle = {
    padding: '10px',
    width: '230px',
    border: '1px solid #c4c4c4',
    borderRadius: '5px',
    margin: '5px 0px',
    background: selectedSecondBtn ? '#88BDE7' : 'transparent',
    color: selectedSecondBtn ? '#fff' : '#757575',
    cursor: 'pointer',
  };

  const cardBtn = {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px',
    width: '250px',
    height: '40px',
    border: '1px solid #c4c4c4',
    paddingLeft: '10px',
    gap: 15,
    lineHeight: 1.5,
    cursor: 'pointer',
    borderRadius: '5px',
    color: '#757575',
  };

  if (selectedFirstBtn && selectedSecondBtn) {
    cardBtn.background = '#88BdE7';
  } else {
    cardBtn.background = 'transparent';
  }
  return (
    <>
      <button style={cardBtn} onClick={handleOpen}>
        <div>카드내역 연동 동의서 확인하기</div>
        <Img src={check} alt="check" />
      </button>
      <Modal open={open} onClose={handleClose}>
        <Grid theme="body">
          <Grid theme="modal_header">
            <CloseButton onClick={handleClose} title="닫기" />
            <Grid theme="modal_title">카드 내역 연동 동의서</Grid>
          </Grid>
          <Grid theme="modal_section">
            <Grid theme="modal_subtitle">가입상품 목록 전송요구 및 개인신용정보 수집/이용</Grid>
            <Grid theme="modal_content">
              SeedStock은 『신용정보의 이용 및 보호에 관한 법률』, 『개인정보 보호법』등 관련 법령에 따라 개인신용정보를 처리합니다.
            </Grid>
            <Grid theme="modal_subtitle">거부할 권리와 불이익</Grid>
            <Grid theme="modal_content">
              개인신용정보 수집/이용에 동의하지 않을 수 있으나 원활한 서비스 이용을 위해 동의가 꼭 필요합니다. 미동의 시 본인신용정보 통합조회,
              데이터분석 서비스를 이용할 수 없습니다.
            </Grid>
            <Grid theme="modal_subtitle">정보를 보내는 곳</Grid>
            <Grid theme="modal_content">신한카드</Grid>
            <Grid theme="modal_subtitle">정보를 받는 곳</Grid>
            <Grid theme="modal_content">SeedStock</Grid>
            <Grid theme="modal_subtitle">목적</Grid>
            <Grid theme="modal_content">상세정보 전송요구를 위한 가입상품목록 조회</Grid>
            <Grid theme="modal_subtitle">종료 시점/ 보유 · 이용 기간</Grid>
            <Grid theme="modal_content">상세정보 전송요구 시까지 또는 최대 7일</Grid>
            <Grid theme="modal_subtitle">자동 업데이트</Grid>
            <Grid theme="modal_content">아니요</Grid>
            <Grid theme="modal_subtitle">전송요구 정보</Grid>
            <Grid theme="modal_content">카드/선불카드 목록</Grid>
            <Grid theme="modal_subtitle">수집 · 이용 정보</Grid>
            <Grid theme="modal_content">
              · 개인식별정보 <br />
              전자서명, 접근토큰, 인증서, 전송요구서
              <br />
              <br />
              · 신용거래정보 <br />
              카드 목록: 카드번호, 카드식별자, 카드상품명, 본인/가족 구분(코드), 카드구분(코드)
              <br />
              선불카드 목록: 선불카드 식별자, 상품명, 발급일자, 액면한도 또는 최대충전한도
            </Grid>
          </Grid>
          <Grid theme="modal_section">
            <Grid theme="modal_subtitle">개인신용정보 제공</Grid>
            <Grid theme="modal_subtitle">거부할 권리와 불이익</Grid>
            <Grid theme="modal_content">
              개인신용정보 제공에 동의하지 않을 수 있으나, 서비스 이용을 위해서는 동의가 필요합니다. 미동의 시 본인신용정보 통합조회, 데이터분석,
              마이데이터 가입 현황 안내, 전송요구내역 통합조회 서비스 이용이 불가합니다.
            </Grid>
            <Grid theme="modal_subtitle">정보를 받는 곳</Grid>
            <Grid theme="modal_content">신한카드</Grid>
            <Grid theme="modal_subtitle">목적</Grid>
            <Grid theme="modal_content">본인확인 및 개인신용정보의 전송</Grid>
            <Grid theme="modal_subtitle">보유 · 이용기간</Grid>
            <Grid theme="modal_content">본인확인 및 개인신용정보의 전송 목적 달성시까지</Grid>
            <Grid theme="modal_subtitle">제공 정보</Grid>
            <Grid theme="modal_content">
              · 개인식별정보
              <br />
              전자서명, CI, 인증서, 전송요구서
            </Grid>
            <Grid theme="modal_subtitle">정보를 받는 곳</Grid>
            <Grid theme="modal_content">한국신용정보원</Grid>
            <Grid theme="modal_subtitle">목적</Grid>
            <Grid theme="modal_content">마이데이터서비스 가입현황 안내, 전송요구내역 통합조회 서비스 제공</Grid>
            <Grid theme="modal_subtitle">보유 · 이용기간</Grid>
            <Grid theme="modal_content">한국신용정보원의 마이데이터서비스 가입현황 안내 및 전송요구내역 통합조회 서비스 목적 달성시까지</Grid>
            <Grid theme="modal_subtitle">제공정보</Grid>
            <Grid theme="modal_content">
              · 전송요구 내역정보
              <br />
              회원 가입여부, 서비스목록수, 서비스목록, 클라이언트 ID, 전송요구내역수, 전송요구내역목록, 정보제공자기관코드, 권한범위, 전송요구일자,
              전송요구종료시점
            </Grid>
          </Grid>
          <Grid theme="modal_btnSection">
            <button style={firstBtnStyle} onClick={onClickFirstBtn}>
              개인신용정보 수집 · 이용 동의
            </button>
            <button style={secondBtnStyle} onClick={onClickSecondBtn}>
              개인신용정보 제공 동의
            </button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

const CloseButton = styled(Close)(() => ({
  float: 'right',
  cursor: 'pointer',
  color: 'grey',
  fontSize: 26,
  '&:hover': {
    color: 'lightgrey',
  },
}));

export default CardConsentModal;
