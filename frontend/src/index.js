import React from 'react';
import ReactDOM from 'react-dom/client';
import { getInitialTheme, applyTheme } from './context/ThemeContext';
import './index.css';
import App from './App';

applyTheme(getInitialTheme());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
