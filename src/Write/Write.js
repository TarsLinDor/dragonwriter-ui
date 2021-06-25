import React, { useState, useEffect } from 'react';
import './Write.scss';
const db = require('../database.json');
import NavBar from './UI/NavBar.js';
import WorkBench from './UI/WorkBench.js';
import BooksMenu from './UI/BooksMenu.js';

export default function Write(props) {
  //Navbar:
  const count = Object.keys(db).length; //loads last book on default.
  const [BookTitle, setBookTitle] = useState(db.books[count].title);
  const [BookId, setBookId] = useState(db.books[count].id);
  //BookBar:
  const [BookMenu, setBookMenu] = useState(0);
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
            BookID: BookId
          }}
        />
      </div>
    );
  }
}
