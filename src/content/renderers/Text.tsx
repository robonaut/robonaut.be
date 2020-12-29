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
  return (
    <StyledText type={type}>
      {children ? (
        children
      ) : (
        <span dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </StyledText>
  );
};
