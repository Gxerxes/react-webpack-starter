import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

//import Home from './components/Home.jsx';
import ImgContainer from './main/components/imgContainer/imgContainerView'
import 'normalize.css';

ReactDOM.render(
  <ImgContainer />,
  document.querySelector('#root')
);
