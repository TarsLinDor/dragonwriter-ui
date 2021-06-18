import React, { useState, useEffect } from 'react';
import './WorkBench.scss';
import ToolBar from './ToolBar.js';
import Editor from './Tools/Editor.js';
import Character from './Tools/Character.js';
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
    { Type: 'Editor', order:'1'},
    { Type: 'Character', order: '2'}
  ]);
  const [toolListB, setToolListB] = useState([
    { Type: 'Editor', order:'1'},
    { Type: 'Character', order:'2'}
  ]);
  //TabBar Stuff;
  const [multiView, setMultiView] = useState(0); //used to set the view to 1 tool or 2.
  const [listItemsA, ToolA] = Tablist(toolListA, setToolListA);
  const [listItemsB, ToolB] = Tablist(toolListB, setToolListB);

  function setView() {
    toggle(multiView, setMultiView);
  }
  function AddTool() {

  }

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
  function remove() {
    props.setTool(props.Tabs.splice(props.order));
    if (props.Tabs.length <= 1) {
      props.setList('');
    }
  }
  function select() {
    props.setSelect(props.order);
    if (props.name == 'Editor') {
      props.setTool(<Editor {...props.location} />);
    }
    if (props.name == 'Character') {
      props.setTool(<Character {...props.location} />);
    }
  }

  if (props.selected == props.order) {
    return (
      <div className="Tab Selected">
        <a onClick={select}>
          <b>{props.name}:</b>&nbsp;{props.loc}
        </a>
        <span className="material-icons" onClick={remove}>
          close
        </span>
      </div>
    );
  } else {
    return (
      <div className="Tab notSelected" onClick={select}>
        <a>
          <b>{props.name}:</b>&nbsp;{props.loc}
        </a>
        <span className="material-icons" onClick={remove}>
          close
        </span>
      </div>
    );
  }
}

function Tablist(Tabs, list) {
  const [selected, setSelect] = useState(0);
  const [Tool, setTool] = useState('');
  const listItems = Tabs.map((Tablist, index) => (
    <Tab
      {...{
        key: index,
        order: index,
        name: Tablist.Type,
        location: Tablist.loc,
        setList: list,
        setTool: setTool,
        setSelect: setSelect,
        selected: selected,
      }}
    />
  ));
  return [listItems, Tool];
}
