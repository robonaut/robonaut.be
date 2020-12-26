import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import Errors from "../elements/errors";
import ErrorBoundary from "../errors/boundary";
import { actionCreators } from "../redux/actions";
import { RootState } from "../redux/reducers";
import { isLoggedInSelector, userSelector } from "../redux/selectors/auth";
import {
  StyledLogout,
  StyledLogoutIcon,
  StyledUserContainer,
  StyledUserEmail,
} from "../style/auth";
import {
  MainContent,
  StyledHeader,
  StyledHeaderContent,
  StyledNavigation,
  StyledNavigationLink,
} from "../style/layout";
import { routeDefinitions } from ".";

const createNavigationLink = (
  { key, path, title }: { key: string; path: string; title: string },
  idx: number
): JSX.Element | null => {
  if (key !== "login") {
    return (
      <StyledNavigationLink exact key={`nav-link-${idx}`} to={path}>
        {title}
      </StyledNavigationLink>
    );
  }

  return null;
};

const mapState = (
  state: RootState
): {
  isLoggedIn: ReturnType<typeof isLoggedInSelector>;
  user: ReturnType<typeof userSelector>;
} => ({
  isLoggedIn: isLoggedInSelector(state),
  user: userSelector(state),
});

const mapDispatch = {
  logout: actionCreators.logout,
};

const connector = connect(mapState, mapDispatch);

const Router = ({
  isLoggedIn,
  user,
  logout,
}: ConnectedProps<typeof connector>): JSX.Element => {
  const loginPath =
    routeDefinitions.find((def) => def.key === "login")?.path ?? "/";

  return (
    <>
      <StyledHeader>
        <Errors />
        {isLoggedIn && (
          <StyledHeaderContent>
            <StyledNavigation>
              {routeDefinitions.map(createNavigationLink)}
            </StyledNavigation>
            <StyledUserContainer>
              <StyledUserEmail>{user.email}</StyledUserEmail>
              <StyledLogout
                onClick={(): void => {
                  logout();
                }}
              >
                <StyledLogoutIcon />
              </StyledLogout>
            </StyledUserContainer>
          </StyledHeaderContent>
        )}
      </StyledHeader>
      <Switch>
        {routeDefinitions.map(({ Component, path, key }, routeIdx) => {
          return (
            <Route key={`route-${routeIdx}`} path={path} exact={path === "/"}>
              {key === "login" && <Component />}
              {key !== "login" && isLoggedIn ? (
                <MainContent>
                  <ErrorBoundary>
                    <Component />
                  </ErrorBoundary>
                </MainContent>
              ) : (
                <Redirect to={loginPath} />
              )}
            </Route>
          );
        })}
      </Switch>
    </>
  );
};

export default connector(Router);
