import marked, { Renderer } from "marked";
import Prism from "prismjs";
import React from "react";
import { renderToString } from "react-dom/server";

import { StyledPage } from "../style/page";
import Image from "./renderers/Image";

require("prismjs/components/prism-typescript");

const renderer: Partial<Renderer> = {
  image(href: string, title: string, text: string) {
    const image = <Image href={href} text={text} title={title} />;
    // const div = document.createElement("div");
    const html = renderToString(image);

    return html;
  },
  codespan(text: string) {
    const html = Prism.highlight(text, Prism.languages.ts, "ts");

    return `<code class="language-ts">${html}</code>`;
  },
  code(text: string) {
    const html = Prism.highlight(text, Prism.languages.ts, "ts");

    return `<pre class="language-ts"><code class="language-ts">${html}</code></pre>`;
  },
  link(href: string, _title: string, text: string) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  },
};

// @ts-ignore
marked.use({ renderer });

export default (markdown: string): JSX.Element | null => {
  const html = marked(markdown, { gfm: true, smartypants: true });

  return <StyledPage dangerouslySetInnerHTML={{ __html: html }} />;
};
