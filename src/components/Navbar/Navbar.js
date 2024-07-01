import React from 'react';
import {Button, Layout, Menu} from 'antd';
import logo from '../../images/logo.png';
import './style/Navbar.css';

const { Header } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100px',
          backgroundColor: '#fff',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <a href="/">
            <img
              src={logo}
              alt="hospital logo"
              style={{position: 'relative', top: '15px', left: '5px', width: '100px'}}/>
          </a>
        </div>
        <Menu
          className="nav-menu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
          style={{
            flex: 1,
            justifyContent: 'space-around',
            minWidth: '900px',
            width: '900px',
            border: 'none'
          }}
        >
          <SubMenu key="Introduct" title="소개">
            <Menu.Item key="doctor"><a href="/doctor">의료진 소개</a></Menu.Item>
            <Menu.Item key="hospital"><a href="/hospital">병원 소개</a></Menu.Item>
          </SubMenu>
          <SubMenu key="surgary-booking" title="진료예약">
            <Menu.Item key="booking"><a href="/booking">예약</a></Menu.Item>
            <Menu.Item key="surgery-list"><a href="/surgery-list">진료내역 확인</a></Menu.Item>
          </SubMenu>
          <Menu.Item key="동물등록">
            <a href="/">동물등록</a>
          </Menu.Item>
          <SubMenu key="customer-center" title="고객센터">
            <Menu.Item key="notice"><a href="/notice">공지사항</a></Menu.Item>
            <Menu.Item key="event"><a href="/event">이벤트</a></Menu.Item>
            <Menu.Item key="qna"><a href="/qna">QnA</a></Menu.Item>
          </SubMenu>
          <Menu.Item key="관리자">
            <a href="/">관리자</a>
          </Menu.Item>
        </Menu>

        <Button style={{ backgroundColor: '#00bfff'}}>회원가입</Button>
        <Button style={{ marginLeft: '10px', backgroundColor: '#fffff0' }}>로그아웃</Button>
      </Header>
    </Layout>
  );
};
export default NavBar;