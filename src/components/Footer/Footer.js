import React from 'react';
import logo from '../../images/logo.png';

const hospitalNameStyle = {
  fontWeight: 'bold',
  fontSize: '18px',
  float: 'left',
  marginLeft: '15px',
};

const Footer = () => {
  return (
    <div style={{ width: '1200px', borderTop: '1px solid gray', height: '150px', marginTop: '-200px' }}>
      <img src={logo} alt="hospital_logo" style={{ width: '100px', margin: '10px', float: 'left' }} />
      <p>
        <p style={hospitalNameStyle}>고양이 케어 전문 병원 <span style={{ fontSize: '24px'}}><b style={{ color: '#ffbb94'}}>야옹</b> 동물병원</span></p>
        <p style={{fontWeight: 'bold', marginLeft: '100px', float: 'left', lineHeight: '30px' }}>(00000) 서울 서대문구 신촌동 1(1층)</p>
      </p>
      <br />
      <br />
      <br />
      <p style={{ float: 'left', marginLeft: '-270px', marginTop: '0' }}><b>전화번호 </b> <span style={{ fontSize: '20px'}}>(02) 1234 - 1111 - 2222</span></p>
      <p style={{ marginTop: '0'}}>찾아오시는 길 : (지하철 2호선)신촌역 2번출구에서 나와 150m 직진</p>
    </div>
  );
};

export default Footer;
