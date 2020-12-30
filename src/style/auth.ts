import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import styled from "styled-components";

import colors from "./colors";
import { HEADER_HEIGHT, LOGIN_FORM_WIDTH } from "./sizes";

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledUserEmail = styled.div`
  color: ${colors.blue};
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: calc(100vh - ${HEADER_HEIGHT});
  margin-top: ${HEADER_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.whiteDarker};
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

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${LOGIN_FORM_WIDTH}px;
`;

export const StyledLoginInput = styled.input`
  font-size: 1.6rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.grey};
  border-radius: 4px;
  padding: 0.6rem;
  margin: 0.6rem;
  width: ${LOGIN_FORM_WIDTH}px;
  color: ${colors.navy};
  &:hover {
    border-color: ${colors.blue};
  }
  &[type="submit"] {
    cursor: pointer;
    border: none;
    background-color: ${colors.navy};
    color: ${colors.white};
    font-weight: bold;
    &:hover {
      background-color: ${colors.blue};
    }
  }
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
