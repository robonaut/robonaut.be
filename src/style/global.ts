import { createGlobalStyle } from "styled-components";

import { MAX_WIDTH } from "./sizes";
import { px2vw } from "./utils";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Open Sans', sans-serif;
    font-size: ${px2vw(24, 768)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18, 768)};
    }

    @media (min-width: 1024px) {
      font-size: 100%
    }

  }
  body {
    margin: 0px;
    max-width: ${MAX_WIDTH}px;
    margin: auto;
    overflow-y: scroll;
  }
  ul {
    list-style-type: none;
    margin: 16px;
    padding: 0;
  }

  li::before {
    content: "• ";
  }
`;

export default GlobalStyle;
