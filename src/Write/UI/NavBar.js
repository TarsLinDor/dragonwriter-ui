import React, { useState, useEffect } from 'react';
import './NavBar.scss';
function toggle(value, set) {
  if (value == 0) {
    set(1);
  } else {
    set(0);
  }
}

export default function NavBar(props) {
  function bookmenu() {
    toggle(props.BookMenu, props.setBookMenu);
  }
  return (
    <div className="NavBar">
      <div>
        <h1 onClick={props.menu}>DragonWriter</h1>
        <h2>{props.BookTitle}</h2>
        <button className="s1" onClick={bookmenu}>
        <i className="bi bi-book"></i>
      </button>
      </div>
      <button className="s2" onClick={props.menu}>
      <i className="bi bi-three-dots"></i>
      </button>
    </div>
  );
}
