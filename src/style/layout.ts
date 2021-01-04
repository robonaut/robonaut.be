import { NavLink } from "react-router-dom";
import styled from "styled-components";

import colors from "./colors";
import {
  FULL_HEADER_MINIMAL_WIDTH,
  HEADER_HEIGHT,
  MAIN_PADDING,
} from "./sizes";

// MAIN

export const MainContainer = styled.div``;

export const MainContent = styled.div`
  padding: ${HEADER_HEIGHT} ${MAIN_PADDING} ${MAIN_PADDING} ${MAIN_PADDING};
  position: relative;
  @media print {
    padding: 0 ${MAIN_PADDING};
  }
`;

export const StyledHeader = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1;
  background-color: ${colors.navy};
  height: ${HEADER_HEIGHT};
  padding: 0 ${MAIN_PADDING};
  @media print {
    position: relative;
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  height: 100%;
  justify-content: space-between;
`;

export const StyledNavigation = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: ${colors.blue};
  margin-right: 2rem;
  text-decoration: none;
  color: ${colors.silver};

  &:hover {
    color: ${colors.blue};
  }

  &[aria-current="page"] {
    font-weight: bold;
    color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }
`;

export const StyledUncaughtErrorText = styled.p`
  color: ${colors.red};
`;

export const StyledErrorContainer = styled.div`
  height: ${HEADER_HEIGHT};
  pointer-events: none;
  position: absolute;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  background-color: ${colors.red};
`;

export const StyledErrorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledErrorText = styled.p`
  font-size: 1.4rem;
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

export const StyledImage = styled.img`
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
`;

export const StyledAvatar = styled.img`
  border-radius: 2.5rem;
  width: 5rem;
  height: 5rem;
  flex-grow: none;
  margin-right: 3rem;
  @media (max-width: ${FULL_HEADER_MINIMAL_WIDTH}px) {
    display: none;
  }
`;
