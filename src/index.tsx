// React
import React from 'react';
import ReactDom from 'react-dom';

// App
import App from './App';

// Accept hot reload triggers on this non react component file
if (module.hot) {
  module.hot.accept();
}

// Render
const renderFn = process.env.IS_WEBPACK ? 'render' : 'hydrate';

ReactDom[renderFn](<App />, document.getElementById('app'));
