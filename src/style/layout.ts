import styled from 'styled-components';

import colors from './colors';

export const MainContainer = styled.div`
  padding: 1rem;
`;

export const Heading = styled.div<{ depth: number; isFirst: boolean }>`
  color: ${colors.navy};
  font-size: ${(props) => (1 / props.depth) * 64}px;
  margin-bottom: ${(props) => (1 / props.depth) * 32}px;
  margin-top: ${(props) => (props.isFirst ? 0 : (1 / props.depth) * 32)}px;
`;
