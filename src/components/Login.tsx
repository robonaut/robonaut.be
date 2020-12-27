import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect, ConnectedProps } from "react-redux";
import { Redirect } from "react-router-dom";

import { actionCreators } from "../redux/actions";
import { RootState } from "../redux/reducers";
import { isLoggedInSelector } from "../redux/selectors/auth";
import {
  StyledLoginAsGuest,
  StyledLoginContainer,
  StyledLoginError,
  StyledLoginErrorText,
  StyledLoginForm,
  StyledLoginInput,
  StyledLoginWelcome,
  StyledLoginWelcomeText,
} from "../style/auth";

const mapState = (
  state: RootState
): {
  isLoggedIn: ReturnType<typeof isLoggedInSelector>;
} => ({
  isLoggedIn: isLoggedInSelector(state),
});

const mapDispatch = {
  login: actionCreators.login,
};

const connector = connect(mapState, mapDispatch);

const Login = ({
  isLoggedIn,
  login,
}: ConnectedProps<typeof connector>): JSX.Element => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { t } = useTranslation();

  const handleLogin = (e: React.MouseEvent): void => {
    e.preventDefault();

    if (!username) {
      return setError(t("pages.login.usernameEmptyError"));
    }
    if (!password) {
      return setError(t("pages.login.passwordEmptyError"));
    }

    login({
      username,
      password,
    });
  };

  return (
    <StyledLoginContainer>
      <StyledLoginForm>
        <StyledLoginWelcome>
          <StyledLoginWelcomeText>
            {t("pages.login.welcome")}
          </StyledLoginWelcomeText>
        </StyledLoginWelcome>
        <StyledLoginError>
          {error.length > 0 && (
            <StyledLoginErrorText>{error}</StyledLoginErrorText>
          )}
        </StyledLoginError>
        <StyledLoginInput
          type="text"
          placeholder="username"
          onChange={(e): void => {
            setUsername(e.target.value);
            setError("");
          }}
        />
        <StyledLoginInput
          type="password"
          placeholder="password"
          onChange={(e): void => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <StyledLoginInput type="submit" value="Log in!" onClick={handleLogin} />
        <StyledLoginAsGuest
          onClick={(): void => {
            login({ username: "guest", password: "guest" });
          }}
        >
          {t("pages.login.loginAsGuest")}
        </StyledLoginAsGuest>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default connector(Login);
