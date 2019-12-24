import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 1em;
    font-display: swap;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
