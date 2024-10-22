import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this is included to load Tailwind's styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
