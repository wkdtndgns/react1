import React, { Component } from 'react';

class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>독수리</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Bpp/>
        <Bpp></Bpp>
        <h1>호랑이</h1>
      </div>
    );
  }
}

export default App;
