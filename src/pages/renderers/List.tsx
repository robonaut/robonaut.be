import React from 'react';

export default ({ items }: { items: Array<{ text: string }> }) => {
  return (
    <ul>
      {items.map((item, itemIdx) => (
        <li key={`list-item-${itemIdx}`}>{item.text}</li>
      ))}
    </ul>
  );
};
