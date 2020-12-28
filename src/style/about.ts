// import { RiLogoutBoxRLine } from "react-icons/ri";
import styled from "styled-components";

import colors from "./colors";

export const StyledAboutPage = styled.div`
  .heading-4 {
    background-color: ${colors.whiteDarker};
  }

  .heading-3 .icon {
    margin-right: 1rem;
  }

  ul li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 2rem;
    }
    > span {
      color: ${colors.navy};
      font-weight: bold;
      display: flex;
      flex-direction: column;
      .icon {
        color: ${colors.blue};
        font-size: 0.6rem;
      }
    }
  }
`;
