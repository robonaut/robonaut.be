import Prism from 'prismjs';
import React from 'react';

// @ts-ignore
Prism.manual = true;

function decodeHtml(htmlString: string) {
  if (process.env.IS_WEBPACK) {
    return htmlString;
  }
  const parser = new DOMParser();
  const { body } = parser.parseFromString(htmlString, 'text/html');

  return body.textContent ?? '';
}

function createCodeMarkup(text: string) {
  return {
    __html: Prism.highlight(text, Prism.languages.javascript, 'javascript'),
  };
}

export default ({
  text,
  type,
  lang = 'javascript',
}: {
  text: string;
  type: string;
  lang: string;
}): JSX.Element => {
  const className = `language-${lang}`;

  const Code = (
    <code
      key={process.env.IS_WEBPACK ? 'server' : 'client'}
      className={className}
      dangerouslySetInnerHTML={createCodeMarkup(decodeHtml(text))}
    />
  );

  if (type === 'code') {
    return (
      <pre
        key={process.env.IS_WEBPACK ? 'server' : 'client'}
        className={className}
      >
        {Code}
      </pre>
    );
  }

  return Code;
};
