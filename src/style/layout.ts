import styled from 'styled-components';

import colors from './colors';

export const MainContainer = styled.div`
  padding: 1rem;
`;

export const StyledHeading = styled.div<{ depth: number; isFirst: boolean }>`
  color: ${colors.navy};
  font-size: ${(props) => (1 / props.depth) * 4}rem;
  margin-bottom: ${(props) => (1 / props.depth) * 2}rem;
  margin-top: ${(props) => (props.isFirst ? 0 : (1 / props.depth) * 2)}rem;
`;

export const StyledParagraph = styled.p`
  margin-top: 1rem;
`;

export const StyledList = styled.ul``;

export const StyledListItem = styled.li``;

export const StyledLink = styled.a``;

export const StyledText = styled.span<{ type: string }>`
  font-weight: ${(props) => (props.type === 'strong' ? 'bold' : 'normal')};
  font-style: ${(props) => (props.type === 'em' ? 'italic' : 'normal')};
`;
