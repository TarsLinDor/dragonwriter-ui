import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { createEditor, Editor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { SLATE, CustomEditor } from './SLATE.js';
import './editor.scss';
const db = require('../../../database.json');

export default function Editor() {
  return (
    <div className="Tool column p1">
      <h2>Editor</h2>
      <h4> Table of Contents</h4>
      This Allows you to create and sort:
      <ol>
        <li>Prologue</li>
        <li>Chapters</li>
        <li>Parts</li>
        <li>Interludes</li>
        <li>epilogue</li>
    </ol>

    </div>
  );
}
