import React, { useState, useEffect } from 'react';
import './ToolBar.scss';
export default function ToolBar(props) {
  return (
    <div className="toolbar">
      <div className=" rows">
        <button >
          <span className="material-icons">bookmark</span>
        </button>
        <button >
          <span className="material-icons">mode_edit</span>
        </button>
        <button >
          <span className="material-icons">filter_hdr</span>
        </button>
        <button >
          <span className="material-icons">group</span>
        </button>
        <button  className='rotated'>
          <span className="material-icons">bubble_chart</span>
        </button>
        <button  >
          <span className="material-icons">cached</span>
        </button>
        <button >
          <span className="material-icons">print</span>
        </button>
      </div>

      <div className=" rows">
        <button>
          <span className="material-icons">invert_colors</span>
        </button>
        <button>
          <span className="material-icons">settings</span>
        </button>
      </div>
    </div>
  );
}
