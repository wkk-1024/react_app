import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 适配移动端
document.documentElement.style.fontSize = 100 / 750 + 'vw'

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

