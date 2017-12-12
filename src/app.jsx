import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './rootStore'

import Home from './main/Home';
//import ImgContainer from './main/components/imgContainer/imgContainerView'
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import './scss/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('#root')
);
