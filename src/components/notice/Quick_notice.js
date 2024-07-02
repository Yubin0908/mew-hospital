import React, {useState} from 'react';
import noticeList from '../../dataPool/noticeList.json';
import { Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './style/Notice.css';
import {Link} from "react-router-dom";


const Quick_notice = () => {
  return (
    <div style={{padding: '20px', position: 'relative', top: '-300px', left: '-20px' }}>
      <Row gutter={[16, 16]} style={{ textAlign: 'center', width: '1200px', margin: '0 auto' }}>
        {noticeList.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} style={{textAlign: 'center'}}>
            <div style={{padding: '10px'}}>
              <a href={`/detail/${item.notice_no}`}>
                <img src={require(`../../images/server/${item.img_name}`)} alt="" style={{width: '100%', height: '250px', maxWidth: '400px'}}/>
                <p style={{ fontWeight: 'bold', textAlign: 'left', color: '#000'}}>{item.notice_title}</p>
                <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden',  width: '250px', color: '#000'}}>{item.notice_content}</p>
              </a>
            </div>
          </Col>
        ))}
      </Row>
      <a href="#">
        <PlusCircleOutlined />
      </a>
    </div>
  );
};

export default Quick_notice;
