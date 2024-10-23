import styled from 'styled-components';

import colors from './colors';

export const StyledAboutPage = styled.div`
  .rating {
    color: ${colors.blue};
    font-size: 0.8rem;
  }
  .icon.FaBookmark {
    color: ${colors.blue};
    margin-right: 0.4rem;
  }
  ul li {
    display: inline-block;
    margin: 0.3em 1rem; /* More space between items */
    vertical-align: middle; /* Align items centrally */
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 139, 0.3); /* A more noticeable blue */
    text-underline-offset: 0.1em; /* Slightly offset the underline for a cleaner look */
  }
  ul li:hover {
    background-color: rgba(0, 0, 139, 0.1); /* Highlight item on hover */
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth transition */
  }
  #icon-work {
    ~ h3 + p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }
  .highlight {
    font-weight: 600;
    color: ${colors.blue};
  }
`;
