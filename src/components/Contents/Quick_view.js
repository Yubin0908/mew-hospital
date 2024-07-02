import React from 'react';
import { Button, Input } from 'antd';
import './style/Quick_view.css';

const guideTextStyle = {
  width: '150px',
  textAlign: 'center',
  color: '#aaa',
  fontWeight: 'bold',
  float: 'left',
  marginTop: '12px'
};


const Quick_view = () => {
  return (
    <div style={{width: '1200px', height: '50px', backgroundColor: '#fffedd', marginBottom: '15px', position: 'relative', zIndex: 999}}>
      <div className="quick_view_quide">
        <p style={guideTextStyle}>다음 방문일</p>
        <p style={{color: '#aaa', border: '1px solid gray', width: '.1px', height: '40px', float: 'left', marginTop: '5px'}}></p>
        <Button shape='round' style={{ border: 'none', backgroundColor: '#f0e68c', marginTop: '10px', marginLeft: '10px', float: 'left'}}>냐옹이</Button>
        <p style={{float: 'left', marginLeft: '20px', marginTop: '15px'}}>2024-06-29 (토)</p>
        <p style={{float: 'left', marginLeft: '40px', marginTop: '15px'}}>1차 정기검진 (수의사: 이재현)</p>
        <p style={{float: 'left', marginLeft: '40px', marginTop: '15px', fontWeight: 'bold', color: '#aaa', fontSize: '.9em'}}>예약완료(방문전)</p>
      </div>
      <div>
        <p style={{ position: 'relative', top: '-70px', right: '-600px' }}>
          <Input placeholder='동물등록번호 또는 RFID 입력' style={{ width: '205px' }}/>
          <Button htmlType="submit" style={{marginLeft: '10px', border: '2px solid #00bfff', color: '#00bfff', fontWeight: 'bold', padding: '15px 15px'}}>조회</Button>
        </p>
      </div>
    </div>
  );
};

export default Quick_view;
