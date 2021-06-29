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
    const newEditor = [{ type: 'BookInfo' }];
    addTool(newEditor);
  }
  function addEditor() {
    const newEditor = [{ type: 'Editor' }];
    addTool(newEditor);
  }
  function addWorldBuilder() {
    const newEditor = [{ type: 'Worldbuilder' }];
    addTool(newEditor);
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
        <button>
          <i className="bi bi-people" />
        </button>
        <button>
          <i className="bi bi-snow3" />
        </button>
        <button>
          <i className="bi bi-arrow-repeat" />
        </button>
        <button>
          <i className="bi bi-lightbulb" />
          {/*This would be where users can ask questions and stuff*/}
        </button>
        <button>
          <i className="bi bi-printer" />
        </button>
      </div>

      <div className=" rows">
        <button>
          <i className="bi bi-droplet-half" />
        </button>
        <button>
          <i className="bi bi-gear" />
        </button>
      </div>
    </div>
  );
}
