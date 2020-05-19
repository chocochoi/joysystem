/** @jsx jsx */
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const dynamicStyle = (props) =>
  css`
    color: ${props.color};
  `;

const SliderStyle = styled.div`
  img {
    width: 100%;
    opacity: 0.8;
    transition: all 0.3s ease;
    padding: 3%;
    margin: 10px;
    position: relative;
    text-align: center;
  }
  .slick-center {
    img {
      opacity: 1;
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .slick-prev {
    z-index: 1;
    left: 0;
  }
  .slick-next {
    right: 0;
  }
  ${dynamicStyle};
`;

export default SliderStyle;
