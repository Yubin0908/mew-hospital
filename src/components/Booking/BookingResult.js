import React from 'react';
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Button } from 'antd';
import {useParams} from "react-router-dom";

const BookingResult = () => {
  const params = useParams();
  return (
    <div>
      <NavBar />
      <div style={{ width: '1200px', height: '80vh', margin: '0 auto' }}>
        <div style={{ width : '80%', lineHeight: '15vh', margin: '100px auto', border: '.5px solid gray' }}>
          <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>
            {params.date} 일자 {params.cat}님의 예약이 완료되었습니다.
            <br/>
            감사합니다.
          </p>
          <Button style={{ padding: '40px' }} type='primary' onClick={() => window.location.href = `${process.env.PUBLIC_URL}`}><span style={{ fontSize: '1.5rem'}}>첫 페이지로 이동</span></Button>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
};

export default BookingResult;
