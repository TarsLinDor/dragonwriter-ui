
/*
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
*/
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { createEditor, Editor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { SLATE, CustomEditor } from './SLATE.js';
import Sortable from '../sortable.js';
import './editor.scss';
const db = require('../../../database.json');
function toggle(value, set) {
  if (value == 0) {
    set(1);
  } else {
    set(0);
  }
}

export default function Editor(props) {
  const db_content = db.books[0].editor[0];
  const [content, setContent] = useState(db_content.content);
  const [contentTitle, setContentTitle] = useState(db_content.title);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const title = useMemo(() => withHistory(withReact(createEditor())), []);
  const [viewTOC, setViewTOC] = useState(true);
  const [viewHistory, setViewHistory] = useState(false);
  var zero = 0;
  if (db_content.order > 9) {
    zero = null;
  }
  var TOC = null;
  if (viewTOC) {
    TOC = <TableOfContents />;
  }
  var history = null;
  if (viewHistory) {
    history = <DraftHistory />;
  }
  return (
    <div className="Tools">
      {TOC}
      <div className="Editor">
        <Toolbar
          {...{
            editor: editor,
            viewTOC: viewTOC,
            setViewTOC: setViewTOC,
            viewHistory: viewHistory,
            setViewHistory: setViewHistory
          }}
        />
        <div className="area">
          <div className="page">
            <div className="Title">
              <h1>
                {zero}
                {db_content.order}
              </h1>
              <h3>
                <SLATE
                  {...{
                    editor: title,
                    value: contentTitle,
                    setValue: setContentTitle
                  }}
                />
              </h3>
            </div>
            <br />
            <div className="Contents">
              <SLATE
                {...{ editor: editor, value: content, setValue: setContent }}
              />
            </div>
          </div>
        </div>
      </div>
      {history}
    </div>
  );
}
function Chapter(props) {
  return (
    <div className="page">
      <div className="Title">
        <h1>
          {zero}
          {order}
        </h1>
        <SLATE
          {...{
            editor: title,
            value: contentTitle,
            setValue: setContentTitle
          }}
        />
      </div>
      <br />
      <div className="Contents">
        <SLATE {...{ editor: editor, value: content, setValue: setContent }} />
      </div>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div className="SlateToolBar">
      <button
        onMouseDown={event => {
          event.preventDefault();
          toggle(props.viewTOC, props.setViewTOC);
        }}
      >
        <i className="bi bi-list-ul" />
      </button>

      <div>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(props.editor);
          }}
        >
          <i className="bi bi-type-bold" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleItalicMark(props.editor);
          }}
        >
          <i className="bi bi-type-italic" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleUnderline(props.editor);
          }}
        >
          <i className="bi bi-type-underline" />
        </button>

        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleStrikeThrew(props.editor);
          }}
        >
          <i className="bi bi-type-strikethrough" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleLeft(props.editor);
          }}
        >
          <i className="bi bi-text-left" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleCentered(props.editor);
          }}
        >
          <i className="bi bi-text-center" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleRight(props.editor);
          }}
        >
          <i className="bi bi-text-right" />
        </button>

        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleNoteBlock(props.editor);
          }}
        >
          <i className="bi bi-sticky" />
        </button>
      </div>
      <button
        onMouseDown={event => {
          event.preventDefault();
          toggle(props.viewHistory, props.setViewHistory);
        }}
      >
        <i className="bi bi-clock-history" />
      </button>
    </div>
  );
}
function ContentItem(props) {
  return (
    <div className="ContentItem">
      {props.children.type}&nbsp;{props.children.order}
    </div>
  );
}

function TableOfContents(props) {
  const [contents, setContents] = useState(db.books[0].editor);
  const [simplelist, setsimplelist] = useState([
    contents[0].type,
    contents[1].type
  ]);
  return (
    <div className="tableofcontents">
      <div className="leftheader">Table of Contents</div>
      <Sortable
        {...{ direction: 'v', items: simplelist, setItems: setsimplelist }}
      >
        {simplelist.map((item, index) => (
          <ContentItem key={index}>
            {...{
              type: item,
              order: index
            }}
          </ContentItem>
        ))}
      </Sortable>
    </div>
  );
}

function DraftHistory(props) {
  const [drafts, setDrafts] = useState([1, 2, 3]);
  const style = {
    margin: '1px',
    cursor: 'pointer'
  };
  return (
    <div className="DraftHistory">
      <div className="rightheader">Drafts</div>
      {drafts.map((draft, index) => (
        <div key={index} style={style}>
          {draft}
        </div>
      ))}
    </div>
  );
}
