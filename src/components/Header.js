import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/main">Main </Link>
      <Link to="/sub01"> | sub-01 |</Link>
    </div>
  );
}

export default Header;
