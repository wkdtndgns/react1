import React, { Component } from 'react';

// 컴포넌트
class Bpp extends Component {
    render() { 
      return (
        <div>
          <h1>Bpp</h1>
          <h1>{this.props.num}</h1>
          <button onClick={this.props.onInc}>증가</button>
          <button onClick={this.props.onDec}>감소</button>
        </div>
      );
    }
  }

export default Bpp;