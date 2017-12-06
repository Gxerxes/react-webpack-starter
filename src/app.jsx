import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './main/Home';
//import ImgContainer from './main/components/imgContainer/imgContainerView'
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Home />,
  document.querySelector('#root')
);
