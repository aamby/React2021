import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counters from './components/Counters';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);

