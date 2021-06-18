import React, { useState, useEffect } from 'react';

export default function menu(props) {
  return (
    <div>
      <button onClick={props.nav.write}>write</button>
      <button onClick={props.nav.login}>login</button>
    </div>
  );
}
