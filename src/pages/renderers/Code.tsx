import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';

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
  const [isClient, setIsClient] = useState(false);
  const html = Prism.highlight(text, Prism.languages.javascript, 'javascript');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const Code = (
    <code
      key={isClient ? 'client' : 'server'}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  if (type === 'code') {
    return <pre className={className}>{Code}</pre>;
  }

  return Code;
};
