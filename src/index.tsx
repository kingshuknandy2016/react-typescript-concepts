import { App } from './App';
import ReactDOM from 'react-dom/client';
import React from 'react';

// const container = document.getElementById("root");
// const root=createRoot(container);
// // ReactDOM.render(<App/>,document.getElementById("root"));
// root.render(<App/>)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
