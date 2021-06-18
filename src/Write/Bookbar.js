import React, { useState, useEffect } from 'react';
import './bookbar.scss';
const db = require('../database.json');
import { toggle } from './UI.js';

export default function BookBar(props) {
  const [books, setbooks] = useState(db.Books);
  var listItems = books.map((books, index) => (
    <Book
      {...{key:books.Id,
      title: books.Title,
      setBookTitle: props.setBookTitle,
      setBookId: props.setBookId,
      BookMenu: props.BookMenu,
      setBookMenu: props.setBookMenu,
      Order:index}}
    />
  ));
  function newbook() {
    //db function add book to db
    setbooks(db.Books);
  }

  if (props.BookMenu == 1) {
    return (
      <div className="BookBar">
        {listItems}
        <div onClick={newbook} className="Book">
          <a className="material-icons">add</a>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

function Book(props) {
  function selectBook() {
    props.setBookTitle(db.Books[props.Order].Title);
    props.setBookId(db.Books[props.Order].Id);
    toggle(props.BookMenu, props.setBookMenu);
  }
  return (
    <div className="Book" onClick={selectBook}>
      <a>{props.title}</a>
    </div>
  );
}
