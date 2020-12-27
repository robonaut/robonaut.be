import React from "react";

import { StyledLink } from "../../style/layout";

export default ({
  text,
  href,
  children,
}: {
  text: string;
  href: string;
  children: JSX.Element;
}): JSX.Element => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer">
    {children ? children : text}
  </StyledLink>
);
