import React, { Component } from 'react';
import withF1 from './withF1';
class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>호랑이1</h1>
        <h1>호랑이2</h1>
        <h1>호랑이3</h1>
      </div>
    );
  }
}


export default withF1(Bpp);