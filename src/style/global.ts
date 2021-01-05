import { createGlobalStyle } from "styled-components";

import colors from "./colors";
import prism from "./prism";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;

    @media (min-width: 768px) {

    }

    @media (min-width: 1024px) {

    }

    @media print {
      @page { margin: 0; }
      html {
        font-size: 11px;
      }
      body {
        margin: 0;
        -webkit-print-color-adjust: exact;
      }
    }

  }
  body {
    margin: 0px;
    margin: auto;
    overflow-y: scroll;
    font-size: 1.4rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  iframe {
    border-width: 0px;
  }

  a {
    text-decoration: none;
    color: ${colors.blue};
  }

  p {
    margin-bottom: 2rem;
  }

  .image {
    width: calc(50% - 4px);
    border-radius: 8px;
    object-fit: contain;
    &[alt="apple_appstore"] {
      width: 100px;
    }
    &[alt="google_playstore"] {
      width: 112px;
    }
    @media (min-width: 768px) {
      width: calc(25% - 8px);
    }
    @media (min-width: 1024px) {
      width: calc(20% - 4px);
    }
  }

  ${prism}
`;

export default GlobalStyle;
