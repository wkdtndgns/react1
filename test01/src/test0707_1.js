
import React, { Component } from 'react';
import { useState } from 'react';
function App() {
   const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function f1(e){
    console.log(e);
    setX(e.clientX);
    setY(e.clientY);
  }
  return (
    <div>
        <div
            style={ {background: 'red'}}
            onMouseMove={f1}> 호랑이
        </div>
        <h1>App</h1>
        <h1>{x} {y}</h1>
    </div>
  )
}

export default App;  