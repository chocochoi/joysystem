/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

// const NavBar = props => {
//   return (
//     <div
//       css={css`
//         padding: 0.75rem;
//         background-color: ${props.bg || 'white'};
//         border-bottom: ${props.border || '#f5f5f5'};
//         height: 72px;
//         a {
//           padding: 0 20px;
//         }
//       `}
//       {...props}
//     >
//       {props.children}
//     </div>
//   );
// };

export const Layout = (props) => {
  return (
    <div
      css={css`
        position: relative;
      `}
      {...props}
    >
      <Header />
      <div
        css={css`
          position: relative;
          min-height: 600px;
        `}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
