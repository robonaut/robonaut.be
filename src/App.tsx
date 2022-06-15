import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import type { StaticRouterProps } from 'react-router-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { setupStore } from './redux/store';
import RouterContent from './routes/router';
import GlobalStyle from './style/global';
import { MainContainer } from './style/layout';

const App = ({
  isServer = false,
  location = '',
}: {
  isServer?: boolean;
  location?: string;
}): JSX.Element => {
  const { Router, routerProps }: { Router: React.ElementType; routerProps?: StaticRouterProps } =
    isServer ? { Router: StaticRouter, routerProps: { location } } : { Router: BrowserRouter };

  return (
    <MainContainer>
      <GlobalStyle />
      <Provider store={setupStore({ isServer })}>
        <Router {...routerProps}>
          <RouterContent />
        </Router>
      </Provider>
    </MainContainer>
  );
};

export default App;
