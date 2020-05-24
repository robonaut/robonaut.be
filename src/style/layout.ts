import { Link } from '@reach/router';
import styled from 'styled-components';

import colors from './colors';
import { MAIN_PADDING, MAX_WIDTH } from './sizes';

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

  &[aria-current='page'] {
    font-weight: bolder;
    border-bottom: 1px solid ${colors.grey};
  }
`;

export const StyledHeading = styled.div<{ depth: number; isFirst: boolean }>`
  color: ${colors.navy};
  font-size: ${(props): number => 1 + 2 / props.depth}rem;
  font-weight: bold;
  margin-bottom: ${(props): number => (1 / props.depth) * 1}rem;
  margin-top: ${(props): number => (props.isFirst ? 0 : 5 / props.depth)}rem;
  border-bottom: ${(props): string =>
    props.depth === 1 ? `1px solid ${colors.whiteDarker}` : 'none'};
`;

export const StyledParagraph = styled.p`
  margin-top: 1rem;
`;

export const StyledList = styled.ul``;

export const StyledListItem = styled.li``;

export const StyledLink = styled.a``;

export const StyledText = styled.span<{ type: string }>`
  font-weight: ${(props): string =>
    props.type === 'strong' ? 'bold' : 'inherit'};
  font-style: ${(props): string =>
    props.type === 'em' ? 'italic' : 'inherit'};
`;

export const StyledQuote = styled.div`
  border-left: 8px solid ${colors.whiteDarker};
  padding-left: 8px;
`;

export const StyledImage = styled.img`
  width: calc(20% - 4px);
  border-radius: 8px;
  object-fit: contain;
  &[alt='apple_appstore'] {
    width: 100px;
  }
  &[alt='google_playstore'] {
    width: 112px;
  }
`;
