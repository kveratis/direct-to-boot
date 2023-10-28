import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DirectToBoot } from './pages/home/direct-to-boot';
import reportWebVitals from './reportWebVitals';
import { Constants } from "./constants";
import { worker } from "./mocks/worker";

// Only use Mocked Service Worker endpoints in local development when mock api is true
// Used for debugging & testing
if (process.env.NODE_ENV === 'development' && Constants.MOCK_API) {
    worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DirectToBoot />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
