import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { BrowserRouter as Router, StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";

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

export function renderStatic(
  location: string
): { style: string; body: string } {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(<App isServer={true} location={location} />)
  );

  const style = sheet.getStyleTags();

  return { body, style };
}
