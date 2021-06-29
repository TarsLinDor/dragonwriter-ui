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
import Help from './Tools/Help.js';
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
  var N = list;
  N.splice(order, 1);
  return N;
}
function add(list, item) {
  const NewList = list.concat(item);
  return NewList;
}
//UI Specific Functions
const startState = [
  { type: 'BookInfo' }
  //{ type: 'Editor' },
  //{ type: 'Worldbuilder' },
  //{ type: 'Character' },
  //{ type: 'Outline' },
  //{ type: 'Feedback' },
  //{ type: 'Help' }
  //{ type: 'Print'},
  //{ type: 'Settings' }
];

export default function WorkBench(props) {
  //This is the MainArea where all the tools are located.
  const [toolListA, setToolListA] = useState(startState);
  const [toolListB, setToolListB] = useState([]);
  //TabBar and ToolView
  const [view, setview] = useState(0); //used to set the view to 1 tool or 2.
  const [listItemsA, ToolA] = Tablist(toolListA, setToolListA); //Defines what is in Tab bar A and the selected tool in that window.
  const [listItemsB, ToolB] = Tablist(toolListB, setToolListB); //Defines what is in Tab bar B and the selected tool in that window.

  function setView() {
    toggle(view, setview);
    if (!view) {
      const Half = half(toolListA);
      setToolListA(Half[0]);
      setToolListB(Half[1]);
    } else {
      const Full = full(toolListA, toolListB);
      setToolListA(Full);
      setToolListB([]);
    }
  }

  if (view == 0) {
    return (
      <div className="Tools">
        <ToolBar
          {...{
            setA: setToolListA,
            setB: setToolListB,
            view: view,
            listA: toolListA,
            listB: toolListB
          }}
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
          {...{
            setA: setToolListA,
            setB: setToolListB,
            view: view,
            listA: toolListA,
            listB: toolListB
          }}
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
    const newList = remove(props.list, props.order);
    props.setList(newList);
    if (props.selected != props.order) {
      props.setSelect(0);
      if (newList.length > 0) {
        props.setTool(setWorkingTool(newList[0].type));
      }
    } else {
      props.setSelect(props.order);
      if (newList.length > 0) {
        props.setTool(setWorkingTool(newList[0].type));
      }
    }
  }

  function select() {
    props.setSelect(props.order);
    props.setTool(setWorkingTool(props.type));
  }

  if (props.selected == props.order) {
    var sel = 'Tab Selected';
  } else {
    var sel = 'Tab notSelected';
  }
  return (
    <div className={sel}>
      <a onClick={select}>
        <i className={setIcon(props.type)} />
        <p>{props.order /*location*/}</p>
      </a>
      <i className="bi bi-x" onClick={deleteTab} />
    </div>
  );
}

function Tablist(List, setList) {
  const [selected, setSelect] = useState(0);
  const [Tool, setTool] = useState([<BookInfo />]);
  const [location, setLocation] = useState([]);
  const TabItems = List.map((ListItem, index) => (
    <Tab
      {...{
        key: index,
        order: index,
        type: ListItem.type,
        location: location,
        setLocation: setLocation,
        setList: setList,
        setTool: setTool,
        setSelect: setSelect,
        selected: selected,
        list: List
      }}
    />
  ));
  return [TabItems, Tool];
}

function setIcon(icon) {
  // Sets Which icon is visible in the tab.
  switch (icon) {
    case 'BookInfo':
      return 'bi bi-bookmark';
    case 'Editor':
      return 'bi bi-vector-pen';
    case 'Character':
      return 'bi bi-people';
    case 'Worldbuilder':
      return 'bi bi-tree';
    case 'Outline':
      return 'bi bi-snow3';
    case 'Feedback':
      return 'bi bi-arrow-repeat';
    case 'Print':
      return 'bi bi-printer';
    case 'Settings':
      return 'bi bi-gear';
    default:
      return 'bi bi-vector-pen';
  }
}

function setWorkingTool(view, location, setLocation) {
  var d = new Date();
  var n = d.getTime();
  switch (view) {
    default:
      return (
        <BookInfo
          {...{ key: n, location: location, setLocation: setLocation }}
        />
      );
    case 'BookInfo':
      return (
        <BookInfo
          {...{ key: n, location: location, setLocation: setLocation }}
        />
      );
    case 'Editor':
      return (
        <Editor {...{ key: n, location: location, setLocation: setLocation }} />
      );
    case 'Character':
      return (
        <Character
          {...{ key: n, location: location, setLocation: setLocation }}
        />
      );
    case 'Worldbuilder':
      return (
        <Worldbuilder
          {...{ key: n, location: location, setLocation: setLocation }}
        />
      );
    case 'Outline':
      return (
        <Outline
          {...{ key: n, location: location, setLocation: setLocation }}
        />
      );
    case 'Feedback':
      return (
        <Feedback
          {...{ key: n, location: location, setLocation: setLocation }}
        />
      );
    case 'Print':
      return (
        <Print {...{ key: n, location: location, setLocation: setLocation }} />
      );
    case 'Settings':
      return <Settings />;
  }
}
