import React, { useState, useEffect } from 'react';
import './WorkBench.scss';
import ToolBar from './ToolBar.js';
import Editor from './Tools/Editor.js';
import Character from './Tools/Character.js';
import BookInfo from './Tools/BookInfo.js';
import Feedback from './Tools/Feedback.js';
import Outline from './Tools/Outline.js';
import Worldbuilder from './Tools/Worldbuilder.js';
import Print from './Tools/Print.js';
import Settings from './Tools/Settings.js';
//UI functions
function toggle(value, set) {
  if (value == 0) {
    set(1);
  } else {
    set(0);
  }
}
//UI Specific Functions

export default function WorkBench(props) {
  //This is the MainArea where all the tools are located.
  const BookID = props.BookID;
  const [toolListA, setToolListA] = useState([
    { Type: 'Editor', order: 1, location: 'Chapter 1' },
    { Type: 'Character', order: 2, location: 'Bridge Four' },
    { Type: 'Worldbuilder', order: 3, location: 'Roshar' },
    { Type: 'BookInfo', order: 4, location: 'Title' },
    { Type: 'Feedback', order: 5, location: '@user: Thory' },
    { Type: 'Outline', order: 6, location: 'Act 2' },
    { Type: 'Print', order: 7, location: 'epub' },
    { Type: 'Settings', order: 8, location: 'settings' }
  ]);
  const [toolListB, setToolListB] = useState([
    { Type: 'Editor', order: '1', location: 'Chapter 1' },
    { Type: 'Character', order: '2', location: 'Chapter 1' }
  ]);
  //TabBar and ToolView
  const [multiView, setMultiView] = useState(0); //used to set the view to 1 tool or 2.
  const [listItemsA, ToolA] = Tablist(toolListA, setToolListA);
  const [listItemsB, ToolB] = Tablist(toolListB, setToolListB);

  function setView() {
    toggle(multiView, setMultiView);
  }
  function AddTool() {}

  if (multiView == 0) {
    return (
      <div className="Tools">
        <ToolBar AddTool={AddTool} />
        <div className="MainArea">
          <div className="TabBar">
            {listItemsA}
            <button className="rotated" onClick={setView}>
              <span className="material-icons">splitscreen</span>
            </button>
          </div>
          {ToolA}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Tools">
        <ToolBar AddTool={AddTool} />
        <div className="MainArea">
          <div className="TabBar">{listItemsA}</div>
          {ToolA}
        </div>
        <div className="split" />
        <div className="MainArea">
          <div className="TabBar">
            {listItemsB}
            <button className="rotated" onClick={setView}>
              <span className="material-icons">splitscreen</span>
            </button>
          </div>
          {ToolB}
        </div>
      </div>
    );
  }
}

function Tab(props) {
  const L = props.Tabs.length;
  function remove() {
    props.setList(props.Tabs.slice(props.order));
  }
  function select() {
    props.setSelect(props.order);
    props.setTool(setToolView(props.name));
  }

  if (props.selected == props.order) {
    var sel = 'Tab Selected';
  } else {
    var sel = 'Tab notSelected';
  }
  return (
    <div className={sel}>
      <a onClick={select}>
        <span className="material-icons">{setIcon(props.name)}</span>
        <p>{props.location}</p>
        <p>{L}</p>
      </a>
      <span className="material-icons" onClick={remove}>
        close
      </span>
    </div>
  );
}

function Tablist(Tabs, list) {
  const [selected, setSelect] = useState(0);
  const [Tool, setTool] = useState(<Editor {...Tabs.location} />);
  const listItems = Tabs.map((Tablist, index) => (
    <Tab
      {...{
        key: index,
        order: index,
        name: Tablist.Type,
        location: Tablist.location,
        setList: list,
        setTool: setTool,
        setSelect: setSelect,
        selected: selected,
        Tabs: Tabs
      }}
    />
  ));
  return [listItems, Tool];
}

function setIcon(icon) {
  if (icon == 'Character') {
    return 'group';
  } else if (icon == 'Worldbuilder') {
    return 'filter_hdr';
  } else if (icon == 'BookInfo') {
    return 'bookmark';
  } else if (icon == 'Outline') {
    return 'bubble_chart';
  } else if (icon == 'Feedback') {
    return 'cached';
  } else if (icon == 'Print') {
    return 'print';
  } else if (icon == 'Settings') {
    return 'settings';
  } else {
    return 'edit';
  }
}

function setToolView(view) {
  if (view == 'Editor') {
    return <Editor {...location} />;
  } else if (view == 'Character') {
    return <Character {...location} />;
  } else if (view == 'Worldbuilder') {
    return <Worldbuilder {...location} />;
  } else if (view == 'BookInfo') {
    return <BookInfo {...location} />;
  } else if (view == 'Feedback') {
    return <Feedback {...location} />;
  } else if (view == 'Outline') {
    return <Outline {...location} />;
  } else if (view == 'Print') {
    return <Print {...location} />;
  } else if (view == 'Settings') {
    return <Settings {...location} />;
  }
}
