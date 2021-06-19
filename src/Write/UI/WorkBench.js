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
    { Type: 'Editor', order: 1, location: 'Chapter 1' },
    { Type: 'Character', order: 2, location: 'Bridge Four' },
    { Type: 'WorldBuilder', order: 3, location: 'Roshar' },
    { Type: 'BookInfo', order: 4, location: 'Title' },
    { Type: 'Feedback', order: 5, location: '@user: Thory' },
    { Type: 'Outline', order: 6, location: 'Act 2' },
    { Type: 'Print', order: 7, location: 'epub' },
    { Type: 'Settings', order: 8, location: 'settings' },
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
  const location = props.location;
  function remove() {
    props.setTool(props.Tabs.splice(props.order));
    if (props.Tabs.length <= 1) {
      props.setList('');
    }
  }
  function select() {
    props.setSelect(props.order);
    if (props.name == 'Editor') {
      props.setTool(<Editor {...location} />);
    }
    if (props.name == 'Character') {
      props.setTool(<Character {...location} />);
    }
  }

  var iconName = setIcon(props.name)

  const icon = (
    <span className="material-icons" onClick={remove}>
      {iconName}
    </span>
  );

  if (props.selected == props.order) {
    return (
      <div className="Tab Selected">
        <a onClick={select}>
          {icon}
          <p>{location}</p>
        </a>
        <span className="material-icons" onClick={remove}>
          close
        </span>
      </div>
    );
  } else {
    return (
      <div className="Tab notSelected" onClick={select}>
        <a onClick={select}>
          {icon}
          <p>{location}</p>
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
  const [Tool, setTool] = useState(<Editor {...Tabs.location} />);
  const listItems = Tabs.map((Tablist, index) => (
    <Tab
      {...{
        key: index,
        order: index,
        name: Tabs[index].Type,
        location: Tabs[index].location,
        setList: list,
        setTool: setTool,
        setSelect: setSelect,
        selected: selected
      }}
    />
  ));
  return [listItems, Tool];
}

function setIcon(icon){
  if (icon == 'Character') {
    return 'group';
  }
  else if(icon == 'WorldBuilder') {
    return 'filter_hdr';
  }
  else if(icon == 'BookInfo') {
    return 'bookmark';
  }
  else if(icon == 'Outline') {
    return 'bubble_chart';
  }
  else if(icon == 'Feedback') {
    return 'cached';
  }
    else if(icon == 'Print') {
    return 'print';
  }
  else if (icon == 'Settings'){
    return 'settings';
  }
  else {
    return 'edit';
  }
}