import styled from 'styled-components';

import colors from './colors';

export const StyledContactPage = styled.div`
  ul li {
    &:hover {
      font-weight: 600;
    }
  }

  ul li a {
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon {
      margin-right: 1rem;
    }
  }

  ul li:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const StyledSuccessMessage = styled.p`
  color: ${colors.blue};
  align-self: flex-start;
  height: 1rem;
`;
