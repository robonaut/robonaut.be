import { NavLink } from "react-router-dom";
import styled from "styled-components";

import colors from "./colors";
import { MAIN_PADDING } from "./sizes";

// MAIN

export const MainContainer = styled.div`
  position: relative;
  padding: ${MAIN_PADDING};
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
  z-index: 1;
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

export const StyledHeading = styled.div<{ depth: number; isFirst: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.navy};
  font-size: ${(props): number => 1 + 2 / props.depth}rem;
  font-weight: bold;
  margin-bottom: ${(props): number => (1 / props.depth) * 2}rem;
  margin-top: ${(props): number => (props.isFirst ? 0 : 5 / props.depth)}rem;
  border-bottom: ${(props): string =>
    props.depth === 1 ? `1px solid ${colors.whiteDarker}` : "none"};
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
