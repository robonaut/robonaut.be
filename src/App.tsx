import { Router, ServerLocation } from '@reach/router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { routeDefinitions } from './routes';
import GlobalStyle from './style/global';
import { MainContainer } from './style/layout';

const App: React.StatelessComponent<{}> = () => (
  <MainContainer>
    <Router>
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
    <ServerLocation url={url}>
      <GlobalStyle />
      <App />
    </ServerLocation>
  );

  const style = sheet.getStyleTags();

  return { body, style };
}
