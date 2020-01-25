import { createGlobalStyle } from 'styled-components';

import { px2vw } from './utils';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 100%;
    font-family: 'Open Sans', sans-serif;
    font-display: auto;
    /* font-size: ${px2vw(24)}; */

    /* @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    } */
  }
  body {
    margin: 0px;
  }
`;

export default GlobalStyle;