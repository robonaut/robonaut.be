import React from "react";

import { getContent } from "../content";

const Contact: React.FunctionComponent = (): JSX.Element => {
  return <>{getContent("contact")}</>;
};

export default Contact;
