import React from 'react';
import ReactDOM from 'react-dom';

import Home from './main/Home';

import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import './scss/style.scss';

//import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <Home />,
  document.querySelector('#root')
);
