import React from 'react';
import ReactDOM from 'react-dom/client';

import './vendor/normalize';
import './vendor/fonts/fonts.scss';

import './Share/Container.scss';
import './Share/Color-accent.scss';
import './Share/Button.scss';
import './Share/Overflow.scss';
import './Share/Visually-hidden.scss';
import './Share/Root.scss';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
