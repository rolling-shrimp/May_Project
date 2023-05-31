import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './components/test';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />    
    {/* <Calculator /> */}
  </BrowserRouter>,
  document.getElementById('root')
);
