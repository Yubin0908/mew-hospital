import React from 'react';
import { Carousel } from "antd";

const importAll = r => r.keys().map(r);
const images = importAll(require.context('../../images/banner', false, /\.(png|jpg)$/));

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const imgStyle = {
  width: '100%',
  height: '475px',
}

const Banner = () => {
  return (
    <>
      <Carousel
        autoplay
        autoplaySpeed={3000}
        arrows
        infinite={true}
        style={{ width: '700px', position: 'relative', top: '50px', left: '100px' }}>
        {images.map((image, index) => (
          <div key={index} style={contentStyle}>
            <img src={image} alt={`banner-${index}`} style={imgStyle} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
