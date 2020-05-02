import React from 'react';

import { Heading } from '../../style/layout';

export default ({
  depth,
  isFirst,
  children,
}: {
  text: string;
  depth: number;
  isFirst: boolean;
  children: JSX.Element;
}): JSX.Element => (
  <Heading isFirst={isFirst} depth={depth}>
    {children}
  </Heading>
);
