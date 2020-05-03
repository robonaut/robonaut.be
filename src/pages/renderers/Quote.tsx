import React from 'react';

import { StyledQuote } from '../../style/layout';

export default ({ children }: { children: JSX.Element }): JSX.Element => {
  return <StyledQuote>{children}</StyledQuote>;
};
