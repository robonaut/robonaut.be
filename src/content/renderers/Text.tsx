import React from "react";

import { StyledText } from "../../style/layout";

export default ({
  text,
  type,
  children,
}: {
  text: string;
  type: string;
  children: JSX.Element;
}): JSX.Element => {
  if (type === "br") {
    return <br />;
  }

  return <StyledText type={type}>{children ? children : text}</StyledText>;
};
