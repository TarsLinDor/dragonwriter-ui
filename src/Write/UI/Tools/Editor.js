import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { createEditor, Editor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { SLATE, CustomEditor } from './SLATE.js';
import './editor.scss';
const db = require('../../../database.json');

export default function Editor() {
  return (
    <div className="Tool column p1">
      <h2>Editor</h2>
      <h4> Table of Contents</h4>
      This Allows you to create and sort and move to recycle bin:
      <ol>
        <li>Prologue</li>
        <li>Chapters</li>
        <li>Parts</li>
        <li>Interludes</li>
        <li>epilogue</li>
      </ol>
      <h4> Content Editor</h4>
      This Allows you to write Chapters, Prologues ect.
      <ol>
        <li>Has A Tool Bar</li>
        <li>Word Counter</li>
        <li>Hot Keys for bold, italic, underline, Strikethrew</li>
      </ol>
      <h4> History</h4>
      This Allows you to view previous drafts.
      <ol>
        <li>Locks previous drafts</li>
        <li>
          Button to create a new draft with warning saying current draft is
          locked
        </li>
        <li>
          Should give user the ability to choose to copy previous draft or start
          with a black slate
        </li>
        <li>
          Use a prebuilt compareitor to show the difference between drafts (find
          a diff checker js library)
        </li>
      </ol>
    </div>
  );
}
