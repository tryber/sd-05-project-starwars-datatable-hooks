import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import './index.css';
import App from './App';
import MyProvider from './provider/Provider';

const container = document.getElementById("root");

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>, container,
);

// Attach root container [REF - https://github.com/deeppatel234/react-context-devtool]
debugContextDevtool(container);
