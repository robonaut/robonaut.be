let home = '';

if (!process.env.SERVER_SIDE) {
  home = require('./home.md').default;
}

export { home };
