import React, { useState, useEffect } from 'react';
var wordcount = require('word-count');
const db = require('../../../database.json');

export default function BookInfo(props) {
  //bookId , item_select function
  return (
    <div className="Tool column p1">
      <h2>Book Info</h2>
      Allows you to set the following:
      <ol>
        <li>Book Title</li>
        <li>
          Authors, Co-Authors, Editors, Beta-Readers. <br />
          <ul>
            <li>
              This would allow you to work your project with others, each would
              have a differenct level of accessablilty to your book.
            </li>
            <li>
              It would also be nice to have some sort of git functionality where
              the main author has control over what is merged into the main
              project.
            </li>
          </ul>
        </li>

        <li>Genre, and sub-Genres, Tags</li>
        <ul>
          <li>This would allow you to find beta readers and editors for your book more easly. Becuase they can use search tools to hone in on you book</li>
        </ul>
        <li>Indended Audience
        <ul>
          <li>not sure if this is really nessicary but it would be nice to know.</li>
          <li>Example: YA vs Adult vs Children</li>
        </ul>
        </li>
        {/*<li>Forward, about the Author, ect.
        <ul>
          <li>This seems like the right place for this but it might be better to put this in the editor tab?</li>
        </ul>
        </li>*/}
        <li>Synopsis</li>
      </ol>
    </div>
  );
}
/*Allows you to set:
Title,
Author,
Genre,
Audience,
Tags,
Foreward,
About the Author,
*/
