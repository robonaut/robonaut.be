import { lexer } from 'marked';
import React from 'react';

import {
  Code,
  Heading,
  Image,
  Link,
  List,
  Paragraph,
  Quote,
  Text,
} from './renderers';

const Renderers: Record<string, React.FC<any>> = {
  blockquote: Quote,
  code: Code,
  codespan: Code,
  em: Text,
  heading: Heading,
  link: Link,
  list: List,
  paragraph: Paragraph,
  strong: Text,
  br: Text,
  text: Text,
  image: Image,
};

export function renderToken(token: any, idx: number): JSX.Element | null {
  console.log(token);
  const Renderer = Renderers[token.type] ?? null;

  if (Renderer === null) {
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
