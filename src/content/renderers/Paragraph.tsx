import React from "react";

import { StyledParagraph } from "../../style/layout";

export default ({ children }: { children: JSX.Element }): JSX.Element => {
  return <StyledParagraph>{children}</StyledParagraph>;
};
