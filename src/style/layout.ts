import { Link } from '@reach/router';
import styled from 'styled-components';

import colors from './colors';

export const MainContainer = styled.div`
  padding: 1rem;
`;

export const StyledNavigation = styled.div`
  background-color: ${colors.whiteDarker};
  display: flex;
  width: 100%;
  position: fixed;
`;

export const StyledNavigationLink = styled(Link)`
  color: ${colors.navy};
  margin-right: 1rem;
  padding: 0.4rem;
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
  margin-top: ${(props): number => (1 / props.depth) * 2}rem;
`;

export const StyledParagraph = styled.p`
  margin-top: 1rem;
`;

export const StyledList = styled.ul``;

export const StyledListItem = styled.li``;

export const StyledLink = styled.a``;

export const StyledText = styled.span<{ type: string }>`
  font-weight: ${(props): string =>
    props.type === 'strong' ? 'bold' : 'normal'};
  font-style: ${(props): string => (props.type === 'em' ? 'italic' : 'normal')};
`;
