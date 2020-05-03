import React from 'react';

import { StyledText } from '../../style/layout';

export default ({
  text,
  type,
  children,
}: {
  text: string;
  type: string;
  children: JSX.Element;
}): JSX.Element => (
  <StyledText type={type}>{children ? children : text}</StyledText>
);
