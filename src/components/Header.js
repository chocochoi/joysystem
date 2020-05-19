/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
// import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoMdCloseCircle } from 'react-icons/io';

const sizePoints = [320, 640, 800, 1200];
const mq = sizePoints.map((sp) => `@media (max-width:${sp}px)`);

const cssHeader = css`
  position: relative;
  z-index: 100;
  height: 60px;
  border-bottom: 1px solid #c9c9c9;
  background: #fff;
  h1 {
    position: absolute;
    top: 17px;
    left: 20px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -2px;
  }
  .icon_menu {
    display: none;
  }
  .menu_list {
    text-align: center;
    a {
      line-height: 60px;
      padding: 0 20px;
    }
  }
  .user_info {
    position: absolute;
    top: 0;
    right: 10px;
    a {
      line-height: 60px;
      padding: 0 10px;
      font-size: 13px;
    }
  }
  .btn_close {
    display: none;
  }
  ${mq[0]} {
  }
  ${mq[2]} {
    h1 {
      position: relative;
      text-align: center;
      left: 0;
    }
    .icon_menu {
      position: absolute;
      top: 10px;
      left: 10px;
      display: block;
    }
    .gnb {
      z-index: 100;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      padding-top: 110px;
      width: 200px;
      border-right: 1px solid #c9c9c9;
      background: #fff;
    }
    .menu_list {
      text-align: left;
      border-top: 1px solid #c9c9c9;
      a {
        line-height: 45px;
        display: block;
        border-bottom: 1px solid #c9c9c9;
      }
    }
    .user_info {
      right: auto;
      text-align: center;
      margin-top: 10px;
      a {
        display: inline-block;
        background: #c9c9c9;
        width: 160px;
        text-align: center;
        font-size: 14px;
        line-height: 40px;
        border-radius: 5px;
        border: none;
        color: #000;
        margin-bottom: 3px;
        font-weight: bold;
        &.blue {
          background: #3c3ca4;
          color: #fff;
        }
      }
    }
    .btn_close {
      display: block;
      position: absolute;
      top: 0;
      right: -31px;
      background: #fff;
    }
  }
`;

// const Button = styled.button(
//   {
//     display: 'inline-block',
//     background: '#c9c9c9',
//     width: '160px',
//     textAlign: 'center',
//     fontSize: '14px',
//     lineHeight: '40px',
//     borderRadius: '5px',
//     border: 'none',
//     color: '#000',
//     marginBottom: '3px',
//     fontWeight: 'bold',
//   },
//   props => ({
//     background: props.background,
//     color: props.color,
//     display: props.display,
//   }),
// );

function Header() {
  const [display, setDisplay] = useState(['none']);
  return (
    <header css={cssHeader}>
      <h1>
        <Link to="/">JOYSYSTEM</Link>
      </h1>
      <IoIosMenu size="40" color="#848484" className="icon_menu" onClick={() => setDisplay('block')} />
      <div
        className="gnb"
        css={css`
          ${mq[2]} {
            display: ${display};
          }
        `}
      >
        <div className="menu_list">
          <Link to="/BranchInformation">지점관리</Link>
          <Link to="/Sub01">Sub01</Link>
          <Link to="/Sub01">aboutus</Link>
          <Link to="/Sub01">Sub01</Link>
          <Link to="/Sub01">Sub01</Link>
        </div>
        <div className="user_info">
          <Link to="/" className="blue">
            회원가입
          </Link>
          <Link to="/">로그인</Link>
          <Link to="/" css={{ display: 'none !important' }}>
            로그아웃
          </Link>
        </div>
        <IoMdCloseCircle size="30" className="btn_close" onClick={() => setDisplay('none')} />
      </div>
    </header>
  );
}

export default Header;
