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
function half(list) {
  var h = list.length;
  if (h % 2 == 0) {
    h = Math.ceil(h / 2);
    const firstHalf = list.slice(0, h);
    const secondHalf = list.slice(-h);
    return [firstHalf, secondHalf];
  } else {
    h = Math.ceil(h / 2);
    const firstHalf = list.slice(0, h);
    const secondHalf = list.slice(-(h - 1));
    return [firstHalf, secondHalf];
  }
}
function full(listA, listB) {
  var A;
  if (listA != listB) {
    A = listA.concat(listB);
  } else {
    A = listA;
  }
  return A;
}
function remove(list, order) {
  const N = list.splice(order, 1);
  return N;
}
//UI Specific Functions

export default function WorkBench(props) {
  //This is the MainArea where all the tools are located.
  const BookID = props.BookID;
  const [toolListA, setToolListA] = useState([
    { type: 'Editor', order: 1, location: 'Chapter 1' },
    { type: 'Editor', order: 2, location: 'Chapter 2' },
    { type: 'Character', order: 2, location: 'Bridge Four' }
  ]);
  const [toolListB, setToolListB] = useState([
    { type: 'Editor', order: 1, location: 'Chapter 1' }
  ]);
  //TabBar and ToolView
  const [multiView, setMultiView] = useState(0); //used to set the view to 1 tool or 2.
  const [listItemsA, ToolA] = Tablist(toolListA, setToolListA);
  const [listItemsB, ToolB] = Tablist(toolListB, setToolListB);

  function setView() {
    toggle(multiView, setMultiView);
    if (!multiView) {
      const Half = half(toolListA);
      setToolListA(Half[0]);
      setToolListB(Half[1]);
    } else {
      const Full = full(toolListA, toolListB);
      setToolListA(Full);
      setToolListB([]);
    }
  }

  if (multiView == 0) {
    return (
      <div className="Tools">
        <ToolBar
          {...{ setA: setToolListA, setB: setToolListB, view: multiView }}
        />
        <div className="MainArea">
          <div className="TabBar">
            {listItemsA}
            <button>
              <i onClick={setView} className="bi bi-layout-split" />
            </button>
          </div>
          {ToolA}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Tools">
        <ToolBar
          {...{ setA: setToolListA, setB: setToolListB, view: multiView }}
        />
        <div className="MainArea">
          <div className="TabBar">{listItemsA}</div>
          {ToolA}
        </div>
        <div className="split" />
        <div className="MainArea">
          <div className="TabBar">
            {listItemsB}
            <button>
              <i onClick={setView} className="bi bi-square" />
            </button>
          </div>
          {ToolB}
        </div>
      </div>
    );
  }
}

function Tab(props) {
  function deleteTab() {
    const NewList = remove(props.list, props.order);
    props.setList(NewList);
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
        <i className={setIcon(props.name)} />
        <p>{props.order /*location*/}</p>
      </a>
      <i className="bi bi-x" onClick={deleteTab} />
    </div>
  );
}

function Tablist(list, setlist) {
  const [selected, setSelect] = useState(0);
  const [Tool, setTool] = useState([<div className="Tool" />]);
  const listItems = list.map((tablist, index) => (
    <Tab
      {...{
        key: index,
        order: index,
        name: tablist.type,
        location: tablist.location,
        setList: setlist,
        setTool: setTool,
        setSelect: setSelect,
        selected: selected,
        list: list
      }}
    />
  ));
  return [listItems, Tool];
}

function setIcon(icon) {
  if (icon == 'Character') {
    return 'bi bi-people';
  } else if (icon == 'Worldbuilder') {
    return 'bi bi-tree';
  } else if (icon == 'BookInfo') {
    return 'bi bi-bookmark';
  } else if (icon == 'Outline') {
    return 'bi bi-snow3';
  } else if (icon == 'Feedback') {
    return 'bi bi-arrow-repeat';
  } else if (icon == 'Print') {
    return 'bi bi-printer';
  } else if (icon == 'Settings') {
    return 'bi bi-gear';
  } else {
    return 'bi bi-vector-pen';
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
