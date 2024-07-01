import React from 'react';
import { Card, Button } from 'antd';
import './style/Login.css';

const Login = () => {

  const bookingLink = () => {
    window.location.href = '/booking';
  }

  return (
    <div className="loginWrap">
      <Card style={{ width: '350px', height: '470px', float: 'right', right: '60px', top: '-425px' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem'  }}>
          사용자님, 방문을 환영합니다.
        </div>
        <div>
          <Button type="default"
                  style={{cursor: 'none', border: '2px solid #9ee7ff', color: '#9ee7ff', fontWeight: 'bold', marginTop: '15px', marginLeft: '-150px'}}>
            대표등록된 고양이
          </Button>
        </div>
        <Card
          title="냐옹이 (2세_랙돌)"
          style={{
            marginTop: '10px',
            width: '300px',
            height: '290px',
            border: '2px solid #00bfff',
          }}
        >
          <p>진료 내역이 없습니다.</p>
          <Button onClick={bookingLink} style={{border: '2px solid #00bfff', fontWeight: 'bold', fontSize: '1.1rem', backgroundColor: '#00bfff', color: '#fff', float: 'right' }}>예약</Button>
        </Card>
        <div style={{textAlign: 'center', marginTop: '15px'}}>
          <Button style={{border: '2px solid #f0e68c', color: '#f0e68c', fontWeight: 'bold', marginRight: '10px', padding: '20px 30px'}}>대표 수정</Button>
          <Button style={{border: '2px solid #00bfff', color: '#00bfff', fontWeight: 'bold', padding: '20px 30px'}}>진료 내용 조회</Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
