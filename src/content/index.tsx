import render from './render';

export const getContent = (key: string): JSX.Element | null => {
  if (process.env.APP_ENV === 'browser') {
    //eslint-disable-next-line @typescript-eslint/no-var-requires
    const { default: markdown } = require(`./markdown/${key}.md`);

    return render(markdown);
  } else {
    //eslint-disable-next-line @typescript-eslint/no-var-requires
    const markdown = require('fs').readFileSync(`${__dirname}/markdown/${key}.md`).toString();

    return render(markdown);
  }
};
