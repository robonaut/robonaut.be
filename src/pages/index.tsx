import React from 'react';

import render from './render';

const Components: Record<string, JSX.Element> = {
  home: <div />,
  about: <div />,
};

if (!process.env.SERVER_SIDE) {
  Object.keys(Components).forEach((key) => {
    const markdown = require(`./markdown/${key}.md`).default;

    Components[key] = render(markdown);
  });
}

export default Components;
