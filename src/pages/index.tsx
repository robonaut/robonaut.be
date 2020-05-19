import React from 'react';

import render from './render';

const Components: Record<string, JSX.Element> = {
  home: <div />,
  about: <div />,
  wws: <div />,
};

if (!process.env.IS_WEBPACK) {
  Object.keys(Components).forEach((key) => {
    const markdown = require(`./markdown/${key}.md`).default;

    Components[key] = render(markdown);
  });
} else {
  Object.keys(Components).forEach((key) => {
    const markdown = require('fs')
      .readFileSync(`${__dirname}/markdown/${key}.md`)
      .toString();

    Components[key] = render(markdown);
  });
}

export default Components;
