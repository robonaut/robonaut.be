import { lexer, Token } from "marked";
import React from "react";

import {
  Code,
  Heading,
  Image,
  Link,
  List,
  Paragraph,
  Quote,
  Text,
} from "./renderers";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
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

export function renderToken(token: Token, idx: number): JSX.Element | null {
  // @ts-ignore
  const Renderer = Renderers[token.type] ?? null;

  if (Renderer === null) {
    return null;
  }

  return (
    <Renderer key={`token-${idx}`} {...token} isFirst={idx === 0}>
      {
        // @ts-ignore
        token.tokens ? token.tokens.map(renderToken) : null
      }
    </Renderer>
  );
}

export default (markdown: string): JSX.Element | null => {
  const tokens = lexer(markdown);

  return <>{tokens.map(renderToken)}</>;
};
