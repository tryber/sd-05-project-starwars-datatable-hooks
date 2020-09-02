import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import './index.css';
import App from './App';

const container = document.getElementById('root');

ReactDOM.render(
  <App />, container,
);

// Attach root container [REF - https://github.com/deeppatel234/react-context-devtool]
debugContextDevtool(container);
