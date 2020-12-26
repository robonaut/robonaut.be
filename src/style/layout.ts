import { NavLink } from "react-router-dom";
import styled from "styled-components";

import colors from "./colors";
import { MAIN_PADDING } from "./sizes";

// MAIN

export const MainContainer = styled.div`
  position: relative;
`;

export const MainContent = styled.div`
  margin-top: 4rem;
  padding: ${MAIN_PADDING};
  position: relative;
  padding-bottom: 2rem;
`;

export const StyledHeader = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  background-color: ${colors.whiteDarker};
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: ${MAIN_PADDING};
`;

export const StyledNavigation = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: ${colors.blue};
  margin-right: 1rem;
  text-decoration: none;

  &[aria-current="page"] {
    font-weight: bolder;
    border-bottom: 1px solid ${colors.grey};
  }
`;

export const StyledUncaughtErrorText = styled.p`
  color: ${colors.red};
`;

export const StyledErrorContainer = styled.div`
  pointer-events: none;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  background-color: ${colors.red};
  padding: ${MAIN_PADDING};
`;

export const StyledErrorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledErrorText = styled.p`
  font-size: 0.8rem;
  color: ${colors.whiteDarker};
`;

export const StyledErrorDetailText = styled.p`
  color: ${colors.whiteDarker};
  font-weight: bold;
`;

export const StyledErrorClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  pointer-events: all;
  right: 1rem;
  cursor: pointer;
`;
