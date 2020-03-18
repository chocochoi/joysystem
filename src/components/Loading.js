/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

const Loading = props => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}
    {...props}
  >
    <PacmanLoader size={20} color={'#36D7B7'} />
  </div>
);

export default Loading;
