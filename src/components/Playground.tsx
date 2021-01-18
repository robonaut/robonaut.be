import React, { useState } from "react";

import { getContent } from "../content";
import render from "../content/render";
import { StyledForm, StyledTextArea } from "../style/form";

const Blog: React.FunctionComponent = (): JSX.Element | null => {
  const [content, setContent] = useState(<div />);
  const renderMarkdown = (markdown: string): void => {
    const content = render(markdown);

    if (content) {
      setContent(content);
    }
  };

  return (
    <>
      {getContent("blog")}
      <StyledForm>
        <StyledTextArea
          onChange={(e): void => renderMarkdown(e.target.value)}
        />
      </StyledForm>
      {content}
    </>
  );
};

export default Blog;
