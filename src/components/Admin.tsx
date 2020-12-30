import React from "react";

import { getContent } from "../content";

const Admin: React.FunctionComponent = (): JSX.Element | null => {
  return getContent("admin");
};

export default Admin;
