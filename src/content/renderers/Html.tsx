import React from "react";

export default ({ text }: { text: string }): JSX.Element => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};
