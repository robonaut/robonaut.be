// import { RiLogoutBoxRLine } from "react-icons/ri";
import styled from "styled-components";

import colors from "./colors";

export const StyledAboutPage = styled.div`
  ul li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 2rem;
    }
    > span {
      color: ${colors.blue};
      font-weight: bold;
      display: flex;
      flex-direction: column;
      .icon {
        color: ${colors.blue};
        font-size: 0.6rem;
      }
    }
  }
  .work-entry {
    color: ${colors.blue};
  }

  .company {
    color: red;
  }
`;
