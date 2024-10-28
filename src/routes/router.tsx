import React from 'react';
import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Page from '../components/Page';
import Errors from '../elements/errors';
import Profile from '../elements/profile';
import ErrorBoundary from '../errors/boundary';
import { actionCreators } from '../redux/actions';
import type { RootState } from '../redux/reducers';
import { isLoggedInSelector, userSelector } from '../redux/selectors/auth';
import {
  StyledAuth,
  // StyledLoginIcon,
  StyledLogoutIcon,
  StyledUserContainer,
  StyledUserEmail,
} from '../style/auth';
import {
  MainContent,
  StyledHeader,
  StyledHeaderContent,
  StyledNavigation,
  StyledNavigationLink,
} from '../style/layout';
import { routeDefinitions } from '.';

const createNavigationLink = (
  { key, path, title }: { key: string; path: string; title: string },
  idx: number,
): JSX.Element | null => {
  if (!['login', '404'].includes(key)) {
    return (
      <StyledNavigationLink key={`nav-link-${idx}`} to={path}>
        {title}
      </StyledNavigationLink>
    );
  }

  return null;
};

const mapState = (
  state: RootState,
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

const Router = ({ isLoggedIn, user, logout }: ConnectedProps<typeof connector>): JSX.Element => {
  // const loginPath = routeDefinitions.find(def => def.key === 'login')?.path ?? '/';

  return (
    <>
      <Errors />
      <StyledHeader className="header">
        <StyledHeaderContent>
          <Profile />
          <StyledNavigation>
            {routeDefinitions.map((definition, definitionIdx) => {
              return !isLoggedIn && definition.requiresAuth
                ? null
                : createNavigationLink(definition, definitionIdx);
            })}
          </StyledNavigation>
          {isLoggedIn && (
            <StyledUserContainer>
              <StyledUserEmail>{user.email}</StyledUserEmail>
              <StyledAuth
                onClick={(): void => {
                  logout();
                }}
              >
                <StyledLogoutIcon />
              </StyledAuth>
            </StyledUserContainer>
          )}
          {/* {!isLoggedIn && (
            <StyledAuth
            // onClick={(): void => {
            //   history.push(loginPath);
            // }}
            >
              <StyledLoginIcon />
            </StyledAuth>
          )} */}
        </StyledHeaderContent>
      </StyledHeader>
      <Routes>
        {routeDefinitions.map(({ Component, key, path, title }, routeIdx) => (
          <Route
            key={`route-${routeIdx}`}
            path={key === '404' ? '*' : path}
            element={
              <MainContent>
                <ErrorBoundary>
                  <Page title={title}>
                    <Component />
                  </Page>
                </ErrorBoundary>
              </MainContent>
            }
          ></Route>
        ))}
      </Routes>
    </>
  );
};

export default connector(Router);
