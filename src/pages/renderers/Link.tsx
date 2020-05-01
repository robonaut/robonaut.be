import React from 'react';

export default ({
  text,
  href,
}: {
  text: string;
  href: string;
}): JSX.Element => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);
