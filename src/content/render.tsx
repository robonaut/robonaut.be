import type { Renderer, Tokens } from 'marked';
import { marked } from 'marked';
import Prism from 'prismjs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StyledPage } from '../style/page';
import Image from './renderers/Image';

require('prismjs/components/prism-typescript');

const renderer: Partial<Renderer> = {
  image({ href, title, text }: Tokens.Image) {
    const image = <Image href={href} text={text} title={title} />;
    // const div = document.createElement("div");
    const html = renderToString(image);

    return html;
  },
  codespan({ text }: Tokens.Codespan) {
    const html = Prism.highlight(text, Prism.languages.ts, 'ts');

    return `<code class="language-ts">${html}</code>`;
  },
  code({ text }: Tokens.Code) {
    const html = Prism.highlight(text, Prism.languages.ts, 'ts');

    return `<pre class="language-ts"><code class="language-ts">${html}</code></pre>`;
  },
  link({ href, text }: Tokens.Link) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  },
};

// @typescript-eslint/prefer-ts-expect-error
marked.use({ renderer });

export default (markdown: string): JSX.Element | null => {
  const html = marked(markdown, {
    gfm: true,
  });

  return <StyledPage dangerouslySetInnerHTML={{ __html: html }} />;
};
