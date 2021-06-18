import React, { useState, useEffect } from 'react';

export default function menu(props) {
  return (
    <div>
      <button onClick={props.write}>write</button>
      <button onClick={props.login}>login</button>
    </div>
  );
}
