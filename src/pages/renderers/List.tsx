import React from 'react';
import { StyledList, StyledListItem } from '../../style/layout';

export default ({ items }: { items: Array<{ text: string }> }): JSX.Element => {
  return (
    <StyledList>
      {items.map((item, itemIdx) => (
        <StyledListItem key={`list-item-${itemIdx}`}>
          {item.text}
        </StyledListItem>
      ))}
    </StyledList>
  );
};
