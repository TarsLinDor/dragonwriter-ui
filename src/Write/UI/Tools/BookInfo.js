import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import './Editor.scss';
var wordcount = require('word-count');
const db = require('../../../database.json');

export default function Bookinfo(props) {
  //bookId , item_select function
  return <div className="Tool">Book Info</div>;
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
