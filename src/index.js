import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { router } from './components/router.js';
import {
  RouterProvider,
} from 'react-router-dom'

// import reportWebVitals from './reportWebVitals';

// send pageviews to Umami when the url changes
window.addEventListener('popstate', () => {
  if (window.umami) {
    window.umami.trackView(window.location.pathname + window.location.search + window.location.hash);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement="Loading…"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
