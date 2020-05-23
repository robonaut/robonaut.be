import { Router, ServerLocation } from '@reach/router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { routeDefinitions } from './routes';
import GlobalStyle from './style/global';
import {
  MainContainer,
  StyledHeader,
  StyledNavigation,
  StyledNavigationLink,
} from './style/layout';

const createNavigationLink = (
  { path, title }: { path: string; title: string },
  idx: number
): JSX.Element => {
  return (
    <StyledNavigationLink key={`nav-link-${idx}`} to={path}>
      {title}
    </StyledNavigationLink>
  );
};

const App: React.StatelessComponent = () => (
  <MainContainer>
    <GlobalStyle />
    <StyledHeader>
      <StyledNavigation>
        {routeDefinitions.map(createNavigationLink)}
      </StyledNavigation>
    </StyledHeader>
    <Router primary={false}>
      {routeDefinitions.map(({ Component, path }, routeIdx) => (
        <Component key={`route-${routeIdx}`} path={path} />
      ))}
    </Router>
  </MainContainer>
);

export default App;

export function renderStatic(url: string): { style: string; body: string } {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <ServerLocation url={url}>
        <GlobalStyle />
        <App />
      </ServerLocation>
    )
  );

  const style = sheet.getStyleTags();

  return { body, style };
}
