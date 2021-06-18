import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { toggle } from './UI.js';

export default function NavBar(props) {
  function bookmenu() {
    toggle(props.BookMenu, props.setBookMenu);
  }
  return (
    <div className="NavBar">
      <div>
        <h1 onClick={props.menu}>DragonWriter</h1>
        <h2>{props.BookTitle}</h2>
      </div>
      <button className="s2" onClick={bookmenu}>
        <span className="material-icons">menu</span>
      </button>
    </div>
  );
}
