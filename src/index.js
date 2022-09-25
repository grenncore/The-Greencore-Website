import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/assets/stylesheets/styles.css';
import './components/assets/stylesheets/index.css';
import App from './components/App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
