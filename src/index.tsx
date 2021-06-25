import { worker } from 'mocks/browser';
import AllProviders from 'providers/AllProviders';
import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import Root from './views/Root';

worker.start().then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AllProviders>
        <Root />
      </AllProviders>
    </React.StrictMode>,
    document.getElementById('root')
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
