import React from 'react';
import { StyledLink } from '../../style/layout';

export default ({
  text,
  href,
}: {
  text: string;
  href: string;
}): JSX.Element => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </StyledLink>
);
