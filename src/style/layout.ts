import { NavLink } from "react-router-dom";
import styled from "styled-components";

import colors from "./colors";
import { HEADER_HEIGHT, MAIN_PADDING } from "./sizes";

// MAIN

export const MainContainer = styled.div``;

export const MainContent = styled.div`
  padding: ${HEADER_HEIGHT} ${MAIN_PADDING} ${MAIN_PADDING} ${MAIN_PADDING};
  position: relative;
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
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  height: 100%;
  justify-content: space-between;
`;

export const StyledNavigation = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2rem;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: ${colors.blue};
  margin-right: 1rem;
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
  pointer-events: none;
  position: absolute;
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

export const StyledHeading = styled.div<{ isFirst: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.navy};

  &.heading-1 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  &.heading-2 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1.4rem;
    margin-bottom: 1rem;
  }

  &.heading-3 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  &.heading-4 {
    background-color: ${colors.whiteDarker};
    padding 0.4rem 1rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  &.heading-5 {
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1rem;
  }
`;

export const StyledParagraph = styled.p`
  margin-top: 1rem;
`;

export const StyledList = styled.ul``;

export const StyledListItem = styled.li``;

export const StyledLink = styled.a``;

export const StyledText = styled.span<{ type: string }>`
  font-weight: ${(props): string =>
    props.type === "strong" ? "bold" : "inherit"};
  font-style: ${(props): string =>
    props.type === "em" ? "italic" : "inherit"};
`;

export const StyledQuote = styled.div`
  border-left: 8px solid ${colors.whiteDarker};
  padding-left: 8px;
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
  border-radius: 2rem;
  width: 4rem;
  height: 4rem;
  flex-grow: none;
`;
