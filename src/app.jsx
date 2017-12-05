import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home.jsx';
import 'normalize.css';

ReactDOM.render(
  <Home /> ,
  document.querySelector('#root')
);
