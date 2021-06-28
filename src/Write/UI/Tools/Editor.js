import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { createEditor, Editor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { SLATE, CustomEditor } from './SLATE.js';
import './editor.scss';
const db = require('../../../database.json');

export default function Editor() {
  return <div className="Tool">Editor</div>;
}

/*
export default function Editor(props) {
  const thing = db.books[0].editor[0];
  const order = thing.order;
  const [content, setContent] = useState(thing.content);
  const [contentTitle, setContentTitle] = useState(thing.title);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const title = useMemo(() => withHistory(withReact(createEditor())), []);
  const [viewTOC, setViewTOC] = useState(true);
  const [viewHistory, setViewHistory] = useState(true);
  var zero = 0;
  if (order > 9) {
    zero = null;
  }
  return (
    <div className="Editor">
        <Toolbar {...{ editor: editor }} />
          <div className="area">
            
            <div className="page">
              <div className="Title">
                <h1>
                  {zero}
                  {order}
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
  );
}

function Toolbar(props) {
  return (
    <div className="SlateToolBar">
      <button
        onMouseDown={event => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(props.editor);
        }}
      >
        <i class="bi bi-list-ul" />
      </button>

      <div>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(props.editor);
          }}
        >
          <i class="bi bi-type-bold" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleItalicMark(props.editor);
          }}
        >
          <i class="bi bi-type-italic" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleStrikeThrew(props.editor);
          }}
        >
          <i class="bi bi-type-strikethrough" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleLeft(props.editor);
          }}
        >
          <i class="bi bi-text-left" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleCentered(props.editor);
          }}
        >
          <i class="bi bi-text-center" />
        </button>

        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(props.editor);
          }}
        >
          <i class="bi bi-file-break" />
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            CustomEditor.toggleNoteBlock(props.editor);
          }}
        >
          <i class="bi bi-sticky" />
        </button>
      </div>
      <button
        onMouseDown={event => {
          event.preventDefault();
          CustomEditor.toggleBoldMark(props.editor);
        }}
      >
        <i class="bi bi-clock-history" />
      </button>
    </div>
  );
}

function TableOfContents(props) {
  const [contents, setContents] = useState(db.books[0].editor);
  //var mapAsc = new Map([...map.entries()].sort((a, b) => a[0] > b[0]));
  var listItems = contents.map((contents, index) => (
    <ContentItem
      {...{
        key: contents.id,
        type: contents.type,
        order: contents.order
      }}
    />
  ));
  return (
    <div className="tableofcontents">
      <a>Table Of Contents</a>
      {listItems}
    </div>
  );
}

function ContentItem(props) {
  return <div>{props.type}</div>;
}
*/
