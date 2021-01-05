import React from "react";

import { getContent } from "../content";

const NotFound: React.FunctionComponent = (): JSX.Element => {
  return <>{getContent("404")}</>;
};

export default NotFound;
