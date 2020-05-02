import { lexer } from 'marked';
import React from 'react';

import { Code, Heading, Link, List, Paragraph, Text } from './renderers';

const Renderers: Record<string, React.FC<any>> = {
  code: Code,
  heading: Heading,
  link: Link,
  list: List,
  paragraph: Paragraph,
  text: Text,
};

export function renderToken(token: any, idx: number): JSX.Element | null {
  const NullRenderer = (): null => null;
  const Renderer = Renderers[token.type] ?? NullRenderer;

  if (Renderer === NullRenderer) {
    console.log('NOT IMPLEMENTED', token);
  }

  if (token.type === 'table') {
    console.log('NOT IMPLEMENTED', token);

    return null;
  }

  return (
    <Renderer key={`token-${idx}`} {...token} isFirst={idx === 0}>
      {token.tokens ? token.tokens.map(renderToken) : null}
    </Renderer>
  );
}

export default (markdown: string): JSX.Element => {
  const tokens = lexer(markdown);

  return <>{tokens.map(renderToken)}</>;
};
