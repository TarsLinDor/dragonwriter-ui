import React, { useState, useEffect } from 'react';
import './BooksMenu.scss';
const db = require('../../database.json');
function toggle(value, set) {
  if (value == 0) {
    set(1);
  } else {
    set(0);
  }
}

export default function BooksMenu(props) {
  const [books, setbooks] = useState(db.books);
  var listItems = books.map((books, index) => (
    <Book
      {...{
        key: index,
        title: books.title,
        setBookTitle: props.setBookTitle,
        setBookId: props.setBookId,
        BookMenu: props.BookMenu,
        setBookMenu: props.setBookMenu,
        order: index
      }}
    />
  ));
  function newbook() {
    //db function add book to db
    setbooks(db.Books);
  }

  if (props.BookMenu == 1) {
    return (
      <div className="BooksMenu">
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
    props.setBookTitle(db.books[props.order].title);
    props.setBookId(db.books[props.order].id);
    toggle(props.BookMenu, props.setBookMenu);
  }
  return (
    <div className="Book" onClick={selectBook}>
      <a>{props.title}</a>
    </div>
  );
}
