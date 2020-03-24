import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';

// 악!!!!!!!!!
const logo = {
  display: 'inline',
  letterSpacing: '2px',
  fontWeight: 'bold',
  fontSize: '20px',
};

function Header(props) {
  return (
    <div
      css={css`
        position: relative;
        margin: 0;
        padding: 0;
        height: 100vh;
        background: ${props.bg || 'white'};
      `}
      {...props}
    >
      <h1 css={logo}>
        <Link to="/">JOYSYSTEM</Link>
      </h1>
      <Link to="/BranchInformation">지점관리</Link>
      <Link to="/Sub01">Sub01</Link>
    </div>
  );
}

export default Header;
