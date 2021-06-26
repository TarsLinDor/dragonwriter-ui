import React, { useState, useEffect } from 'react';
var wordcount = require('word-count');
const db = require('../../../database.json');

export default function Characters(props) {
  //bookId , item_select function
  return <div className="Tool">Characters</div>;
}
//left
function TableOfContents(props) {}
function Individual(props) {}
function Group() {}
//middle
function TitleBar(props) {}
function CustomTabBar() {} //Allows you to create tabbed notes ex. backstory, abilitys, motivations
function CustomTab(props) {} //simple note probably use Quill
//right
function Progress(props) {} //Creates a new blank sheet for a character so you can list there progress
