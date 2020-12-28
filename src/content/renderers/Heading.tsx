import React from "react";

import { StyledHeading } from "../../style/layout";

export default ({
  depth,
  isFirst,
  children,
}: {
  text: string;
  depth: number;
  isFirst: boolean;
  children: JSX.Element;
}): JSX.Element => (
  <StyledHeading isFirst={isFirst} className={`heading-${depth}`}>
    {children}
  </StyledHeading>
);
