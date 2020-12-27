import Prism from "prismjs";
import React from "react";

// @ts-ignore
Prism.manual = true;

function createCodeMarkup(text: string): { __html: string } {
  return {
    __html: Prism.highlight(text, Prism.languages.javascript, "javascript"),
  };
}

export default ({
  text,
  type,
  lang = "javascript",
}: {
  text: string;
  type: string;
  lang: string;
}): JSX.Element => {
  const className = `language-${lang}`;

  const Code = (
    <code
      key={Math.random()}
      className={className}
      dangerouslySetInnerHTML={createCodeMarkup(text)}
    />
  );

  if (type === "code") {
    return <pre className={className}>{Code}</pre>;
  }

  return Code;
};
