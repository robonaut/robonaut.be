import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "./colors";
import { MAIN_PADDING, MAX_WIDTH } from "./sizes";

export const MainContainer = styled.div`
  padding-top: 4rem;
  padding-left: ${MAIN_PADDING};
  padding-right: ${MAIN_PADDING};
  padding-bottom: 2rem;
  position: relative;
`;

export const StyledHeader = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  background-color: ${colors.whiteDarker};
`;

export const StyledNavigation = styled.div`
  display: flex;
  margin: auto;
  max-width: ${MAX_WIDTH}px;
  padding: ${MAIN_PADDING};
`;

export const StyledNavigationLink = styled(Link)`
  color: ${colors.navy};
  margin-right: 1rem;
  text-decoration: none;

  &[aria-current="page"] {
    font-weight: bolder;
    border-bottom: 1px solid ${colors.grey};
  }
`;
