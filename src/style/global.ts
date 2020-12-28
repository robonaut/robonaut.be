import { createGlobalStyle } from "styled-components";

import prism from "./prism";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Open Sans', sans-serif;
    font-size: 100%;

    @media (min-width: 768px) {
      font-size: 80%;
    }

    @media (min-width: 1024px) {
      font-size: 100%
    }

  }
  html body {
    margin: 0px;
    margin: auto;
    overflow-y: scroll;
  }

  ul {
    list-style-type: none;
    margin: 16px;
    padding: 0;
  }

  iframe {
    border-width: 0px;
  }

  ${prism}
`;

export default GlobalStyle;
