import React from "react";

import { getContent } from "../content";

const Page: React.FunctionComponent<{ key: string }> = ({
  key,
}): JSX.Element | null => {
  return getContent(key);
};

export default Page;
