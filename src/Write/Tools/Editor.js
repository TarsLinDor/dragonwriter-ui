import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import './Editor.scss';
var wordcount = require('word-count');
const db = require('../../database.json');

export default function Editor(props) {
  //bookId , item_select function
  return 'Editor';
}

//left
function TableOfContents(props) {}
function Chapter(props) {}
function Part() {}
function addContents() {}
//middle
function TitleBar(props) {}
function Quill(props) {}
//right
function DraftList(props) {}
function DraftView() {}

/*
function Editor(props) {
  const [content, setContent] = useState(
    <div>
      <Part type="Part" order={1} title="This is a test" />
      <Chapter type="Chapter" order={1} title="This is a test" />
    </div>
  ); //Used to generate the list of chapters parts prologes ect.
  const [view, setView] = useState(
    // used to set the view for witch chapter/part is displayed.
    {
      title: '',
      type: 'Chapter',
      order: 1,
      draftnum: 1,
      words: ''
    }
  );
  const [totalwords, setTotalWords] = useState(100);
  const [draftview, setDraftView] = useState('');
  const [draftcontent, setDraftContent] = useState({
    title: 'Draft',
    content: '',
    draftnum: 1
  });
  const [toc, setToc] = useState(
    <TableOfContents
      WordCount={totalwords}
      content={content}
      addChap={AddChapter}
      addPart={AddPart}
    />
  );
  function AddChapter() {}
  function AddPart() {}

  function ToggleToc() {
    if (toc != '') {
      setToc('');
    } else {
      setToc(
        <TableOfContents
          WordCount={totalwords}
          content={content}
          addChap={AddChapter}
          addPart={AddPart}
        />
      );
    }
  }

  function ToggleDraft() {
    if (draftview != '') {
      setDraftView('');
    } else {
      setDraftView(<Drafts data={draftcontent} />);
    }
  }
  function SaveContents(E) {}

  const texteditor = (
    <TextEditor
      view={view}
      toggletoc={ToggleToc}
      toggledraft={ToggleDraft}
      SaveContents={SaveContents}
    />
  );

  return (
    <div className="editor">
      {toc}
      {texteditor}
      {draftview}
    </div>
  );
}
function TableOfContents(props) {
  return (
    <div className="tableofcontents">
      <div className="title">
        <b>Table of Contents</b>
      </div>
      <div className="contents">{props.content}</div>
      <div className="add-contents">
        <div className="word-count">{props.WordCount} words</div>
        <div>
          <button
            style={{ fontSize: '125%' }}
            onClick={props.addPart}
            className="material-icons"
          >
            create_new_folder
          </button>
          <button
            onClick={props.addChap}
            style={{ fontSize: '125%' }}
            className="material-icons"
          >
            note_add
          </button>
        </div>
      </div>
    </div>
  );
}
function TextEditor(props) {
  return (
    <div className="TextEditor">
      <div className="top-toolbar">
        <div className="content-type">
          <span>
            <i className="fas fa-list-ul" onClick={props.toggletoc} />{' '}
            <a>
              &nbsp;
              {props.view.type}: {props.view.order}
            </a>
          </span>
        </div>
        <div className="content-title">
          <span>
            <p
              contentEditable="true"
              placeholder="Title"
              content={props.view.title}
            />
          </span>
        </div>
        <div className="draft-menu">
          <span>
            <a>{props.view.draftnum} &nbsp;</a>
            <i
              className="fas fa-drafting-compass"
              onClick={props.toggledraft}
            />
          </span>
        </div>
      </div>
      <Quill content={props.content} save={props.SaveContents} />
    </div>
  );
}
function Quill(props) {
  const [counter, setCounter] = useState(0);
  const theme = 'snow';
  const modules = { toolbar: '#toolbar' };
  const placeholder = "\t  Oh! the places you'll go...";
  const formats = ['bold', 'italic', 'underline', 'strike', 'align'];
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder
  });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const text = quill.getText();
        const contents = quill.getContents();
        //props.Save(text);
        setCounter(wordcount(text));
      });
    }
  });

  return (
    <div className="quill-editor">
      <div ref={quillRef} />
      <div id="toolbar">
        <a>
          <span>{counter} words</span>
        </a>
        <div style={{ display: 'flex', alignItem: 'center' }}>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
          <button className="ql-align" />
          <button className="ql-align" value="center" />
          <button className="ql-align" value="right" />
          <button className="ql-clean" />
          <button />
        </div>
        <a>{props.status}</a>
      </div>
    </div>
  );
}
function Drafts(props) {
  return (
    <div className="Drafts">
      <div className="title">
        <b>Drafts</b>
      </div>
      <div className="draft-list">
        <a>1</a>
      </div>
      <div className="new-draft">
        <button style={{ fontSize: '125%' }} className="material-icons">
          add
        </button>
      </div>
    </div>
  );
}
function Chapter(props) {
  return (
    <div className={props.type}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <a>
          {props.type} {props.order}:&nbsp;
        </a>
        <a style={{ marginRight: 'auto' }}>{props.title}</a>
      </div>
      <span className="material-icons">expand_more</span>
    </div>
  );
}
function Part(props) {
  return (
    <div className="Part">
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <a>Part {props.order}:&nbsp;</a>
        <a style={{ marginRight: 'auto' }}>{props.title}</a>
      </div>
      <span className="material-icons">expand_more</span>
    </div>
  );
}

export default Editor;
*/
