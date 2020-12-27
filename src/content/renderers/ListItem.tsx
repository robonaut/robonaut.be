import React from "react";

import { StyledListItem } from "../../style/layout";

export default ({ children }: { children: JSX.Element }): JSX.Element => {
  return <StyledListItem>{children}</StyledListItem>;
};
