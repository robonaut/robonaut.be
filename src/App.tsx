import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, StaticRouter } from "react-router-dom";

import { setupStore } from "./redux/store";
import RouterContent from "./routes/router";
import GlobalStyle from "./style/global";
import { MainContainer } from "./style/layout";

const App = ({
  isServer = false,
  location,
}: {
  isServer?: boolean;
  location?: string;
}): JSX.Element => {
  return (
    <MainContainer>
      <GlobalStyle />
      {isServer && (
        <Provider store={setupStore({ isServer })}>
          <StaticRouter location={location}>
            <RouterContent />
          </StaticRouter>
        </Provider>
      )}
      {!isServer && (
        <Provider store={setupStore({ isServer })}>
          <Router>
            <RouterContent />
          </Router>
        </Provider>
      )}
    </MainContainer>
  );
};

export default App;
