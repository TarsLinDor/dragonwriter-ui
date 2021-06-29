import React, { useState, useEffect } from 'react';
import './ToolBar.scss';
export default function ToolBar(props) {
  function addTool(Tool) {
    if (!props.view) {
      const newList = props.listA.concat(Tool);
      props.setA(newList);
    } else {
      const newList = props.listB.concat(Tool);
      props.setB(newList);
    }
  }
  function addBookInfo() {
    addTool([{ type: 'BookInfo' }]);
  }
  function addEditor() {
    addTool([{ type: 'Editor' }]);
  }
  function addWorldBuilder() {
    addTool([{ type: 'Worldbuilder' }]);
  }
  function addCharacter() {
    addTool([{ type: 'Character' }]);
  }
  function addOutline() {
    addTool([{ type: 'Outline' }]);
  }
  function addFeedback() {
    addTool([{ type: 'Feedback' }]);
  }
  function addHelp() {
    addTool([{ type: 'Help' }]);
  }
  function addPrint() {
    addTool([{ type: 'Print' }]);
  }
  function addSetting() {
    addTool([{ type: 'Settings' }]);
  }
  return (
    <div className="toolbar">
      <div className=" rows">
        <button onClick={addBookInfo}>
          <i className="bi bi-bookmark" />
        </button>
        <button onClick={addEditor}>
          <i className="bi bi-vector-pen" />
        </button>
        <button onClick={addWorldBuilder}>
          <i className="bi bi-tree" />
        </button>
        <button onClick={addCharacter}>
          <i className="bi bi-people" />
        </button>
        <button onClick={addOutline}>
          <i className="bi bi-snow3" />
        </button>
        <button onClick={addFeedback}>
          <i className="bi bi-arrow-repeat" />
        </button>
        <button onClick={addHelp}>
          <i class="bi bi-question-diamond" />
          {/*This would be where users can ask questions and stuff*/}
        </button>
        <button onClick={addPrint}>
          <i className="bi bi-printer" />
        </button>
      </div>

      <div className=" rows">
        <button>
          <i className="bi bi-droplet-half" />
        </button>
        <button onClick={addSetting}>
          <i className="bi bi-gear" />
        </button>
      </div>
    </div>
  );
}
