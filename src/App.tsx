import { Router, ServerLocation } from '@reach/router';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { routeDefinitions } from './routes';

const App: React.StatelessComponent<{}> = () => (
  <Router>
    {routeDefinitions.map(({ Component, path }, routeIdx) => (
      <Component key={`route-${routeIdx}`} path={path} />
    ))}
  </Router>
);

export default App;

export const renderStatic = async (
  url: string
): Promise<{
  body: string;
  title: string;
}> => {
  const body = renderToString(
    <ServerLocation url={url}>
      <App />
    </ServerLocation>
  );

  return { body, title: 'jiha' };
};
