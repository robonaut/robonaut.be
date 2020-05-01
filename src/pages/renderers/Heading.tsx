import React from 'react';

import { MainTitle } from '../../style/layout';

export default ({
  depth,
  children,
}: {
  text: string;
  depth: number;
  children: JSX.Element;
}): JSX.Element => {
  if (depth === 1) {
    return <MainTitle>{children}</MainTitle>;
  }

  return React.createElement(`h${depth}`, null, children);
};
