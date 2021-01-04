import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "./App";
// import fs from "fs";

export function renderStatic(
  location: string
): { style: string; body: string } {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(<App isServer={true} location={location} />)
  );

  const style = sheet.getStyleTags();

  sheet.seal();

  return { body, style };
}
