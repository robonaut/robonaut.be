import { IoLogInOutline, IoLogOutOutline } from 'react-icons/io5';
import styled from 'styled-components';

import colors from './colors';
import { FULL_HEADER_MINIMAL_WIDTH } from './sizes';

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledUserEmail = styled.div`
  color: ${colors.white};
  margin-right: 2rem;
`;

export const StyledAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media print {
    display: none;
  }
  @media (max-width: ${FULL_HEADER_MINIMAL_WIDTH}px) {
    display: none;
  }
`;

export const StyledLogoutIcon = styled(IoLogOutOutline)`
  font-size: 3rem;
  color: ${colors.silver};
  &:hover {
    color: ${colors.blue};
  }
`;

export const StyledLoginIcon = styled(IoLogInOutline)`
  font-size: 3rem;
  color: ${colors.silver};
  &:hover {
    color: ${colors.blue};
  }
`;

export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40rem);
  min-height: 30rem;
`;

export const StyledLoginWelcome = styled.div`
  margin-bottom: 1rem;
`;

export const StyledLoginWelcomeText = styled.p`
  text-align: center;
  color: ${colors.navy};
  font-size: 2rem;
  white-space: pre-line;
`;

export const StyledLoginError = styled.div`
  height: 2rem;
`;

export const StyledLoginErrorText = styled.p`
  color: ${colors.red};
  font-size: 1.4rem;
`;

export const StyledLoginAsGuest = styled.a`
  color: navy;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1rem;
  &:hover {
    color: ${colors.blue};
  }
`;
