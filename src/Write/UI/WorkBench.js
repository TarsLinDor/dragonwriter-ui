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
  //TabBar Stuff;
  const [multiView, setMultiView] = useState(0); //used to set the view to 1 tool or 2.
  const [tool_A, setTool_A] = useState(<Editor />);
  const [selectedToolA, setSelectedToolA] = useState(0);
  const [selectedToolB, setSelectedToolB] = useState(0);
  const [tool_B, setTool_B] = useState(<Character />);

  const listItems = Tablist(props.toolListA, {
    setTool: setTool_A,
    setList: props.setToolListA,
    setSelect: setSelectedToolA,
    selected: selectedToolA
  });

  const listItems2 = Tablist(props.toolListB, {
    setTool: setTool_B,
    setList: props.setToolListB,
    setSelect: setSelectedToolB,
    selected: selectedToolB
  });

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
            {listItems}
            <button className="rotated" onClick={setView}>
              <span className="material-icons">splitscreen</span>
            </button>
          </div>
          {tool_A}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Tools">
        <ToolBar AddTool={AddTool} />
        <div className="MainArea">
          <div className="TabBar">{listItems}</div>
          {tool_A}
        </div>
        <div className="split" />
        <div className="MainArea">
          <div className="TabBar">
            {listItems2}
            <button className="rotated" onClick={setView}>
              <span className="material-icons">splitscreen</span>
            </button>
          </div>
          {tool_B}
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

function Tablist(Tabs, args) {
  const listItems = Tabs.map((Tablist, index) => (
    <Tab
      {...{
        key: index,
        order: index,
        name: Tablist.Type,
        location: Tablist.loc,
        setList: args.setList,
        setTool: args.setTool,
        setSelect: args.setSelect,
        selected: args.selected,
        Tabs: Tabs
      }}
    />
  ));
  return listItems;
}
