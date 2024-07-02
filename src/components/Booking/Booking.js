import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {DownOutlined, FieldTimeOutlined, HomeFilled} from '@ant-design/icons';
import {Switch, Dropdown, Button, Space, Menu} from 'antd';
import './style/Booking.css';
import classNames from 'classnames';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/locale/ko';
import { format } from 'date-fns';

const Booking = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeCat, setActiveCat] = useState("냐옹이");
  const [selectedDate, setSelectedDate] = useState(format(Date(), 'yyyy-MM-dd'));
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [createMode, setCreateMode] = useState(false);

  const toggleActive = cat => {
    setIsActive(!isActive);
    setActiveCat(activeCat === cat ? null : cat);
  };

  const dateFormatHandler = date => {
    const formatedDate = format(date, 'yyyy-MM-dd');
    setSelectedDate(formatedDate);
  };

  const timeChangeHandler = e => {
    const selected = e.item.props.children[1].props.props.eventKey;
    setSelectedTime(selected);
  };

  const serviceChangeHandler = e => {
    const selected = e.item.props.children[1].props.props.eventKey;
    setSelectedService(selected);
  };

  const modeChangeHandler = () => {
    if(!createMode){
      create_mode();
    } else {
      normal_mode();
    }
  }
  const toggleCreateMode = () => {
    setCreateMode(!createMode)
    console.log(createMode);
  }

  const create_mode = e => {
    const element = document.getElementsByClassName('addCat');
    element[0].innerHTML = '반료묘 추가중..';
  }

  const normal_mode = e => {
    const element = document.getElementsByClassName('addCat');
    element[0].innerHTML = '반료묘 추가하기';
  }

  const timeMenu = (
    <Menu onClick={timeChangeHandler}>
      {[
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:30 - 15:00',
        '15:00 - 16:00',
        '16:00 - 17:00',
        '17:00 - 18:00',
      ].map((time, index) => (
        <Menu.Item key={time} icon={<FieldTimeOutlined />}>
          {time}
        </Menu.Item>
      ))}
    </Menu>
  );

  const serviceMenu = (
    <Menu onClick={serviceChangeHandler}>
      {[
        '건강검진',
        '예방접종',
        '내과',
        '외과',
        '다이어트',
        '영상의학과',
        '기타',
      ].map((service, index) => (
        <Menu.Item key={service}>
          {service}
        </Menu.Item>
      ))}
    </Menu>
  );

  const catList = [
    {
      id: 1,
      name: '냐옹이',
      label:
        (<span className={classNames('', {'active': activeCat === '냐옹이'})}>
          <a onClick={() => toggleActive('냐옹이')} style={{display: 'inline-block', marginLeft: '10px', marginRight: '10px'}}>냐옹이</a>
        </span>)
    },
    {
      id: 2,
      name: '나비',
      label:
        (<span className={classNames('', {'active': activeCat === '나비'})}>
          <a onClick={() => toggleActive('나비')} style={{display: 'inline-block', marginLeft: '10px', marginRight: '10px'}}>나비</a>
        </span>)
    },
  ];

  const bookingProcess = () => {
    if (!activeCat || !selectedDate || !selectedTime || !selectedService) {
      alert('예약정보가 올바르지 않습니다. 확인 후 다시 시도해 주세요.');
    } else {
      window.location.href =`#/BookingResult/${activeCat}/${selectedDate}`;
    }
  }

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '80px', margin: '150px auto 20px auto' }}>
        <HomeFilled /> <b>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</b>
        <b>진료예약&nbsp;&nbsp;&gt;&nbsp;&nbsp;</b>
        <b>예약</b>
      </div>
      <div>
        <img src={require(`../../images/logo.png`)} alt="hospital_logo" style={{ width: '80px', marginLeft: '-50px', marginTop: '20px' }} />
        <span style={{ fontSize: '2rem', fontWeight: 'bold', marginLeft: '40px', verticalAlign: 'top', lineHeight: '100px' }}>진료 예약</span>
      </div>
      <br />
      <div style={{background: "#f7f7f7", width: '1200px', height: '656px', border: '1px solid gray', borderRadius: '15px'}}>
        <div style={{textAlign: 'left', paddingLeft: '30px', paddingTop: '20px', borderBottom: '1px solid gray', height: '30px'}}>
          {catList.map(cat => (
            cat.label
          ))}
          <Switch style={{display: 'inline-block', marginTop: '-10px', marginLeft: '20px'}} onClick={toggleCreateMode} onChange={modeChangeHandler}/>
          <span className='addCat' style={{marginLeft: '10px'}}>반료묘 추가하기</span>
        </div>
        <div>
        <div style={{backgroundColor: '#fff', width: '1200px', height: '605px', float: 'left', borderRadius: '15px'}}>
            <div style={{ position: 'relative', top: '70px', left: '70px'}}>
              <p style={{float: 'left', marginLeft: '100px', marginTop: '40px'}}>진료일을 선택해 주세요.</p>
              <DatePicker
                selected={selectedDate}
                onChange={dateFormatHandler}
                locale={ko}
                inline
              />
            </div>
          </div>
        </div>
        <div style={{ float: 'left' }}>
          <p style={{marginLeft: '380px', marginTop: '-570px', marginRight: '100px'}}>방문할 시간을 선택해 주세요.</p>
          <p style={{marginLeft: '880px', marginTop: '-40px'}}>어떤 진료를 받으실건가요?</p>
        </div>
        <div>
          <Dropdown
            overlay={timeMenu}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()} style={{ position: 'relative', top: '-520px', left: '120px', backgroundColor: '#3d89f7', color: '#fff', padding: '5px 10px', borderRadius: '5px' }}>
              <Space>
                방문 시간 선택
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            overlay={serviceMenu}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()} style={{ position: 'relative', top: '-520px', right: '-295px', backgroundColor: '#3d89f7', color: '#fff', padding: '5px 10px', borderRadius: '5px' }}>
              <Space>
                진료 항목 선택
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div style={{ border: '1px solid gray', borderRadius: '15px', width: '600px', height: '340px', position: 'relative', top: '-400px', left: '500px', textAlign: 'left', padding: '10px' }}>
        <p>환자명 : <b>{!activeCat ? '진료대상이 선택되지 않음':activeCat}</b></p>
        <p>진료일자 : <b>{!selectedDate ? '진료일이 선택되지 않음':selectedDate}</b></p>
        <p>방문시간 : <b>{!selectedTime ? '방문시간이 선택되지 않음':selectedTime}</b></p>
        <p>진료항목 : <b>{!selectedService ? '진료항목이 선택되지 않음':selectedService}</b></p>
        <div style={{ marginTop: '100px', fontWeight: 'bold' }}>
          <p>
            방문시간을 확인해 주시기 바랍니다.
          </p>
          <p>
            예약을 원하시면 '예약'버튼을 클릭해주세요.
          </p>
          <div>
            <Button style={{ position: 'relative', top: '-70px', right: '-500px' }} type='primary' onClick={bookingProcess}>예약하기</Button>
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
    </div>

  );
};

export default Booking;
