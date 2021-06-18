import React, { useState, useEffect } from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import Write from './Write/Write.js';
import Menu from './Menu/Menu.js';
import Login from './Login/Login.js';

function DragonWriter() {
  const [Flow, setFlow] = useState('write');

  function menu() {
    setFlow('menu');
  }
  function write() {
    setFlow('write');
  }
  function login() {
    setFlow('login');
  }

  const nav = { menu: menu, write: write, login: login };
  if (Flow == 'menu') {
    return <Menu {...nav} />;
  }
  if (Flow == 'login') {
    return <Login {...nav} />;
  }
  if (Flow == 'write') {
    return <Write {...nav} />;
  }
}

ReactDOM.render(<DragonWriter />, document.getElementById('root'));
