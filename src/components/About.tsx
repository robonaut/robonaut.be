import React from "react";

import { getContent } from "../content";

const About: React.FunctionComponent = (): JSX.Element | null => {
  return getContent("about");
};

export default About;
