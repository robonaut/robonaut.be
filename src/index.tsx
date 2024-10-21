// React
import React from 'react';
import ReactDom from 'react-dom';

// App
import App from './App';
import { createRoot } from 'react-dom/client';

// Accept hot reload triggers on this non react component file
if (module.hot) {
  module.hot.accept();
  const container = document.getElementById('app');
  if (container) {
    createRoot(container).render(<App />);
  }
} else {
  ReactDom.hydrate(<App />, document.getElementById('app'));
}
