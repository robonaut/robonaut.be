import React from 'react';

export default ({
  text,
  lang,
}: {
  lang: string;
  text: string;
}): JSX.Element => (
  <p>
    <span>{text}</span>
    <span>{lang}</span>
  </p>
);
