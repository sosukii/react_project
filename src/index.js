import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Myname from "./Myname";
import Cardinfo from "./CardInfo";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Myname />
    <Cardinfo />
  </React.StrictMode>,
  document.getElementById('root')
);
