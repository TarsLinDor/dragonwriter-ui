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
  //TabBar Stuff;
  const [multiView, setMultiView] = useState(0); //used to set the view to 1 tool or 2.
  const [tool_A, setTool_A] = useState(<Tool {...{ tool: <Editor /> }} />);
  const [selectedToolA, setSelectedToolA] = useState(0);
  const [selectedToolB, setSelectedToolB] = useState(0);
  const [tool_B, setTool_B] = useState(<Tool {...{ tool: <Character /> }} />);
  const BookID = props.BookID;
  var toolListA = props.toolListA;
  var listItems = toolListA.map((toolListA, index) => (
    <Tab
      {...{
        key: toolListA.Type,
        name: toolListA.Type,
        Order: index,
        setToolList: props.setToolListA,
        ToolList: props.toolListA,
        setTool: setTool_A,
        setSelect: setSelectedToolA,
        selected: selectedToolA
      }}
    />
  ));
  var toolListB = props.toolListB;
  var listItems2 = toolListB.map((toolListB, index) => (
    <Tab
      {...{
        key: toolListB.Type,
        name: toolListB.Type,
        Order: index,
        setToolList: props.setToolListB,
        ToolList: props.toolListB,
        setTool: setTool_B,
        setSelect: setSelectedToolB,
        selected: selectedToolB
      }}
    />
  ));

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
    props.setToolList(props.ToolList.splice(props.Order, props.Order));
    if (props.ToolList.length <= 1) {
      props.setTool('');
    }
  }
  function select() {
    props.setSelect(props.Order);
    if (props.name == 'Editor') {
      props.setTool(<Tool {...{ tool: <Editor /> }} />);
    }
    if (props.name == 'Character') {
      props.setTool(<Tool {...{ tool: <Character /> }} />);
    }
  }

  if (props.selected == props.Order) {
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

function Tool(props) {
  return <div className="Tool">{props.tool}</div>;
}
