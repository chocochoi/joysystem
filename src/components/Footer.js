/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const cssFooter = css`
  position: relative;
  padding:20px 0;
  text-align:center;
  border-top:1px solid #c9c9c9;
  font-size:12px;
  color:#7f7f7f;
  line-height:20px;
  }
`;

function Footer() {
  return (
    <footer css={cssFooter}>
      사업자번호 : 123-34-111111 주소 : 서울특별시 오토웨이타워 대표자명 : 최치연 <br />
      TEL : 031-123-4566 FAX : 02-2222-2335 이메일 : chocochoi76@gmail.com <br />
      Copyrights ⓒ 2020 All Rights Reserved. Designed By chichichi.
    </footer>
  );
}

export default Footer;
