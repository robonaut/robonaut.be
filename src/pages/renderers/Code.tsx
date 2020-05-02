import React, { useEffect, useState } from 'react';

import Prism from 'prismjs';

export default ({
  text,
  lang,
}: {
  lang: string;
  text: string;
}): JSX.Element => {
  const className = `language-${lang}`;
  const [html, setHtml] = useState('');
  useEffect(() => {
    // This solves an issue with incorrect rehydration from the server
    setHtml(Prism.highlight(text, Prism.languages.javascript, 'javascript'));
  }, []);
  return (
    <pre className={className}>
      <code className={className} dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};
