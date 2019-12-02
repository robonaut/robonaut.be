import React from 'react';
import { renderToString } from 'react-dom/server';

const App: React.StatelessComponent<{}> = () => (
  <div className="container">
    <h1>Coming!</h1>
  </div>
);

export default App;

export const renderHtml = (): { app: string } => {
  const app = renderToString(<App />);

  return { app };
};
