import React from 'react';
import Navbar from "../Navbar/Navbar";
import Banner from "../Contents/Banner";
import Login from "../Login/Login";
import Quick_view from "../Contents/Quick_view";
import Quick_notice from "../notice/Quick_notice";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Login />
      <Quick_view />
      <Quick_notice />
      <Footer />
    </div>
  );
};

export default Main;
