import React from 'react';

import { Heading } from '../../style/layout';

export default ({
  depth,
  children,
}: {
  text: string;
  depth: number;
  children: JSX.Element;
}): JSX.Element => <Heading depth={depth}>{children}</Heading>;
