import { lexer } from 'marked';
import React from 'react';

import { Heading, List, Paragraph } from './renderers';

const Renderers: Record<string, React.FC<any>> = {
  heading: Heading,
  paragraph: Paragraph,
  list: List,
};

function renderToken(token: any, idx: number): JSX.Element {
  const NullRenderer = (): null => null;
  const Renderer = Renderers[token.type] ?? NullRenderer;

  if (Renderer === NullRenderer) {
    console.log('NOT IMPLEMENTED', token);
  }

  return <Renderer key={`token-${idx}`} {...token} />;
}

export default (markdown: string): JSX.Element => {
  const tokens = lexer(markdown);

  return <>{tokens.map(renderToken)}</>;
};
