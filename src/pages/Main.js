/** @jsx jsx */
import Slider from 'react-slick';
import { jsx, css } from '@emotion/core';
import { Layout } from '../containers/Layout';
import SliderStyle from '../styles/SliderStyle';

const sizePoints = [320, 640, 1200];
const mq = sizePoints.map((sp) => `@media (max-width:${sp}px)`);
const isMobile = sizePoints[1] > window.innerWidth;

const cssMain = css`
  .in {
    max-width: 950px;
    margin: 0 auto;
  }
  ${mq[1]} {
  }
`;
function Main() {
  const settings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    speed: 500,
  };
  return (
    <Layout css={cssMain}>
      <div className="sec-visual">
        <SliderStyle color="#000">
          <Slider {...settings}>
            <div>
              <img src={require('../img/main/slide_01.jpeg')} alt="슬라이드 이미지 1" />
            </div>
            <div>
              <img src={require('../img/main/slide_02.jpeg')} alt="슬라이드 이미지 1" />
            </div>
            <div>
              <img src={require('../img/main/slide_03.jpeg')} alt="슬라이드 이미지 1" />
            </div>
            <div>
              <img src={require('../img/main/slide_04.jpeg')} alt="슬라이드 이미지 1" />
            </div>
          </Slider>
        </SliderStyle>
      </div>
    </Layout>
  );
}

export default Main;
