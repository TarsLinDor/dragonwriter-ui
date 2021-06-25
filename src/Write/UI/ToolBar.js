import React, { useState, useEffect } from 'react';
import './ToolBar.scss';
export default function ToolBar(props) {
  return (
    <div className="toolbar">
      <div className=" rows">
        <button>
          <i class="bi bi-bookmark" />
        </button>
        <button>
          <i class="bi bi-vector-pen" />
        </button>
        <button>
          <i class="bi bi-tree" />
        </button>
        <button>
          <i class="bi bi-people" />
        </button>
        <button>
          <i class="bi bi-snow3" />
        </button>
        <button>
          <i class="bi bi-arrow-repeat" />
        </button>
        <button>
          <i class="bi bi-printer" />
        </button>
      </div>

      <div className=" rows">
        <button>
          <i class="bi bi-droplet-half" />
        </button>
        <button>
          <i class="bi bi-gear" />
        </button>
      </div>
    </div>
  );
}
