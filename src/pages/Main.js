/** @jsx jsx */
import Slider from 'react-slick';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { IoMdThumbsUp, IoMdRocket, IoMdVolumeHigh, IoIosCall } from 'react-icons/io';
import { Layout } from '../containers/Layout';
import SliderStyle from '../styles/SliderStyle';

const sizePoints = [320, 640, 800, 1200];
const mq = sizePoints.map((sp) => `@media (max-width:${sp}px)`);
const isMobile = sizePoints[2] > window.innerWidth;

const cssMain = css`
  .in {
    max-width: 950px;
    margin: 0 auto;
  }
  h3 {
    position: relative;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -1px;
    &:before {
      position: absolute;
      content: '';
      left: 0;
      top: -5px;
      width: 40px;
      height: 2px;
      background: #000;
    }
  }
  .sec-visual {
    padding: 20px 0 50px;
    background: #f3f3f3;
  }
  .sec-quick-menu {
    padding: 30px 0;
    background: #fff;
    .menu-list {
      overflow: hidden;
      li {
        float: left;
        width: 25%;
        text-align: center;
        border-left: 1px solid #848484;
        &:first-child {
          border-left: none;
        }
        span {
          display: block;
          margin-top: 5px;
          font-size: 14px;
          font-weight: bold;
          color: #848484;
        }
      }
    }
  }
  .sec-what-we-do {
    padding: 30px 0;
    background: #f3f3f3;
  }
  .sec-contact-us {
    padding: 30px 0;
    background: #fff;
  }
  .sec-news {
    padding: 30px 0;
    background: #f3f3f3;
  }
  ${mq[1]} {
  }
`;
function Main() {
  const settings = {
    dots: true,
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
      <div className="sec-quick-menu">
        <div className="in">
          <ul className="menu-list">
            <li>
              <Link to="/Sub01">
                <IoMdThumbsUp size="40" color="#848484" className="icon_menu" />
                <span>회사소개</span>
              </Link>
            </li>
            <li>
              <Link to="/Sub01">
                <IoMdRocket size="40" color="#848484" className="icon_menu" />
                <span>사업영역</span>
              </Link>
            </li>
            <li>
              <Link to="/Sub01">
                <IoIosCall size="40" color="#848484" className="icon_menu" />
                <span>상담신청</span>
              </Link>
            </li>
            <li>
              <Link to="/Sub01">
                <IoMdVolumeHigh size="40" color="#848484" className="icon_menu" />
                <span>공지사항</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sec-what-we-do">
        <div className="in">
          <h3>BUSINESS AREA</h3>
        </div>
      </div>
      <div className="sec-contact-us">
        <div className="in">
          <h3>CONTACT US</h3>
        </div>
      </div>
      <div className="sec-news">
        <div className="in">
          <h3>NEWS</h3>
        </div>
      </div>
    </Layout>
  );
}

export default Main;
