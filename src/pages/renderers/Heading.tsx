import React from 'react';
import { MainTitle } from '../../style/layout';

export default ({ text, depth }: { text: string; depth: number }) => {
  if (depth === 1) {
    return <MainTitle>{text}</MainTitle>;
  }
  return React.createElement(`h${depth}`, null, text);
};
