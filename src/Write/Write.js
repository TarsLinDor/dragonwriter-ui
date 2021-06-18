import React, { useState, useEffect } from 'react';
const db = require('../database.json');
import NavBar from './UI/NavBar.js';
import WorkBench from './UI/WorkBench.js';
import BooksMenu from './UI/BooksMenu.js';
import './Write.scss';

export default function Write(props) {
  //Navbar:
  const count = Object.keys(db).length; //loads last book on default.
  const [BookTitle, setBookTitle] = useState(db.Books[count].Title);
  const [BookId, setBookId] = useState(db.Books[count].Id);
  //BookBar:
  const [BookMenu, setBookMenu] = useState(0);

  //Toolbar:
  //Tools:
  const [toolListA, setToolListA] = useState([
    { Type: 'Editor' },
    { Type: 'Character' }
  ]);
  const [toolListB, setToolListB] = useState([
    { Type: 'Character' },
    { Type: 'Editor' }
  ]);
  if (BookMenu == 1) {
    return (
      <div className="Write">
        <NavBar
          {...{
            BookTitle: BookTitle,
            menu: props.menu,
            BookMenu: BookMenu,
            setBookMenu: setBookMenu
          }}
        />
        <BooksMenu
          {...{
            BookMenu: BookMenu,
            setBookTitle: setBookTitle,
            setBookId: setBookId,
            BookMenu: BookMenu,
            setBookMenu: setBookMenu
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="Write">
        <NavBar
          {...{
            BookTitle: BookTitle,
            menu: props.menu,
            BookMenu: BookMenu,
            setBookMenu: setBookMenu
          }}
        />
        <WorkBench
          {...{
            BookID: BookId,
            toolListA: toolListA,
            setToolListA: setToolListA,
            toolListB: toolListB,
            setToolListB: setToolListB
          }}
        />
      </div>
    );
  }
}
