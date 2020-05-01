import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default ({
  text,
  lang,
}: {
  lang: string;
  text: string;
}): JSX.Element => (
  <SyntaxHighlighter language={lang} style={vs2015}>
    {text}
  </SyntaxHighlighter>
);
