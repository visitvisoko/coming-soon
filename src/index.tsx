import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@coming-soon/app';
import './i18n';
import '@coming-soon/styles/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
