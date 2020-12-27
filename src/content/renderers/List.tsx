import { Tokens } from "marked";
import React from "react";

import { StyledList } from "../../style/layout";
import { renderToken } from "../render";

export default ({ items }: { items: Tokens.ListItem[] }): JSX.Element => {
  return <StyledList>{items.map(renderToken)}</StyledList>;
};
