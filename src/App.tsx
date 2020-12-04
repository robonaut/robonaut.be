import React from "react";
import { renderToString } from "react-dom/server";
import {
  BrowserRouter as Router,
  Route,
  StaticRouter,
  Switch,
} from "react-router-dom";
import { ServerStyleSheet } from "styled-components";

import { routeDefinitions } from "./routes";
import GlobalStyle from "./style/global";
import {
  MainContainer,
  StyledHeader,
  StyledNavigation,
  StyledNavigationLink,
} from "./style/layout";

const getRouterContent = (): JSX.Element => (
  <>
    <StyledHeader>
      <StyledNavigation>
        {routeDefinitions.map(createNavigationLink)}
      </StyledNavigation>
    </StyledHeader>
    <Switch>
      {routeDefinitions.map(({ Component, path }, routeIdx) => (
        <Route key={`route-${routeIdx}`} path={path} exact={path === "/"}>
          <Component />
        </Route>
      ))}
    </Switch>
  </>
);

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

export default function App(): JSX.Element {
  return (
    <MainContainer>
      <GlobalStyle />
      <Router>{getRouterContent()}</Router>
    </MainContainer>
  );
}

export function renderStatic(
  location: string
): { style: string; body: string } {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <StaticRouter location={location}>{getRouterContent()}</StaticRouter>
    )
  );

  const style = sheet.getStyleTags();

  return { body, style };
}
