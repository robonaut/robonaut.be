import styled from "styled-components";

import colors from "./colors";

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
    &:not(:last-child) {
      margin-right: 2rem;
    }
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
