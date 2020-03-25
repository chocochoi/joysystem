/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const sizePoints = [320, 640, 1200];
const mq = sizePoints.map(sp => `@media (max-width:${sp}px)`);
console.log(mq);
const cssHeader = css`
  position: relative;
  height: 60px;
  border-bottom: 1px solid #c9c9c9;
  h1 {
    position: absolute;
    top: 17px;
    left: 20px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -2px;
  }
  .menu_list {
    text-align: center;
    line-height: 60px;
    a {
      padding: 0 20px;
    }
  }
  .user_info {
    position: absolute;
    top: 0;
    right: 10px;
    line-height: 60px;
    a {
      padding: 0 10px;
      font-size: 13px;
    }
  }
  ${mq[0]} {
  }
  ${mq[1]} {
    h1 {
      position: relative;
      text-align: center;
      left: 0;
    }
    .menu_list {
      display: none;
    }
    .user_info {
      display: none;
    }
  }
`;

function Header() {
  return (
    <header css={cssHeader}>
      <h1>
        <Link to="/">JOYSYSTEM</Link>
      </h1>
      <div className="menu_list">
        <Link to="/BranchInformation">지점관리</Link>
        <Link to="/Sub01">Sub01</Link>
      </div>
      <div className="user_info">
        <Link to="/">회원가입</Link>
        <Link to="/">로그인</Link>
        <Link to="/" css={{ display: 'none' }}>
          로그아웃
        </Link>
      </div>
    </header>
  );
}

export default Header;
