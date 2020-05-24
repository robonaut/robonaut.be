import React from 'react';

import { StyledImage } from '../../style/layout';

export default ({
  text,
  href,
}: {
  text: string;
  href: string;
}): JSX.Element => <StyledImage src={href} alt={text} />;
