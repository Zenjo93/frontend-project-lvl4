import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// const rootContainer = document.createElement('div')
// rootContainer.classList.add('bg-light')
//
// const root = ReactDOM.createRoot(document.querySelector('bg-light'));
//

const root = ReactDOM.createRoot(document.getElementById('chat'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

