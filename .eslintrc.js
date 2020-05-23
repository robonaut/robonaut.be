module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    module: 'readonly',
    process: 'readonly',
    require: 'readonly',
    __dirname: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    'react/display-name': 0,
    'react/prop-types': 1,
    curly: 'error',
    'prettier/prettier': ['error'],
    'no-console': 1,
    eqeqeq: 1,
    'simple-import-sort/sort': 1,
    'require-atomic-updates': 1,
    'newline-after-var': 2,
    'newline-before-return': 2,
    '@typescript-eslint/ban-ts-comment': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
