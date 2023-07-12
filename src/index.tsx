import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/style.scss'
import './fonts/OpenSans_Condensed-Bold.ttf'
import './fonts/OpenSans_Condensed-Light.ttf'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

