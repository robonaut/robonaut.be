import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';

export default ({
  text,
  lang,
}: {
  lang: string;
  text: string;
}): JSX.Element => {
  const className = `language-${lang}`;
  const [isClient, setIsClient] = useState(false);
  const html = Prism.highlight(text, Prism.languages.javascript, 'javascript');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <pre className={className}>
      <code
        key={isClient ? 'client' : 'server'}
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </pre>
  );
};
