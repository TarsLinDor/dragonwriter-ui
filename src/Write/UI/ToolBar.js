import React, { useState, useEffect } from 'react';
import './ToolBar.scss';
export default function ToolBar(props) {
  return (
    <div className="toolbar">
      <div className=" rows">
        <button>
          <i className="bi bi-bookmark" />
        </button>
        <button>
          <i className="bi bi-vector-pen" />
        </button>
        <button>
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
