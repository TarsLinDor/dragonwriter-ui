import React, { useState, useEffect } from 'react';
import './NavBar.scss';
function toggle(value, set) {
  if (value == 0) {
    set(1);
  } else {
    set(0);
  }
}
//style:
const style = {
  Navbar: {
    height: '1.75em',
    padding: '0.05em',
    backgroundColor: 'var(--C2)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    boxShadow: '0 4px 7px 0 rgba(0, 0, 0, 0.25)',
    zIndex: '1'
  },
  leftItems: { display: 'flex', alignItems: 'center' },
  h1: {
    color: 'var(--menuFontColor)',
    fontWeight: 'bold',
    fontSize: '1.1em',
    padding: '0.1em 0.1em 0 0.25em',
    margin: '0',
    cursor: 'default'
  },
  h2: {
    color: 'var(--C3)',
    fontWeight: 'normal',
    fontSize: '1em',
    padding: '0 0.5em 0 0.25em',
    margin: '0',
    whiteSpace: 'nowrap'
  },
  button: {
    color: 'var(--menuFontColor)',
    display: 'inline-flex',
    outline: 'none',
    border: 'none',
    borderRadius: '50%',
    padding: '0.15em',
    backgroundColor: 'inherit'
  },
  one: {
    paddingTop: '0.25em',
    fontSize: '1.25em'
  },
  two: {
    paddingTop: '0.15em',
    fontSize: '1.5em'
  },
  buttonHover: {
    display: 'inline-flex',
    outline: 'none',
    border: 'none',
    borderRadius: '50%',
    padding: '0.15em',
    backgroundColor: 'inherit',
    color: 'var(--C1)'
  }
};
function Button(props) {
  const [H, setH] = useState(style.button);
  function on() {
    setH(style.buttonHover);
  }
  function off() {
    setH(style.button);
  }

  return (
    <button
      style={H}
      onClick={props.direct}
      onMouseEnter={on}
      onMouseLeave={off}
    >
      {props.children}
    </button>
  );
}
export default function NavBar(props) {
  function bookmenu() {
    toggle(props.BookMenu, props.setBookMenu);
  }
  return (
    <div style={style.Navbar} className="NavBar">
      <div style={style.leftItems}>
        <h1 onClick={props.menu} style={style.h1}>
          DragonWriter
        </h1>
        <h2 style={style.h2}>{props.BookTitle}</h2>
        <Button {...{ direct: bookmenu }}>
          <i style={style.one} className="bi bi-book" />
        </Button>
      </div>
      <Button {...{ direct: props.menu }}>
        <i style={style.two} className="bi bi-three-dots" />
      </Button>
    </div>
  );
}
