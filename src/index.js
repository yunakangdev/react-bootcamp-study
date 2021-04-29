import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);
