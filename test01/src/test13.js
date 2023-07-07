import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Bpp tiger={false} lion={true} cat
        showMeTheMoney = { 100 }
        />
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    let {tiger,lion,cat }= this.props;
    let {showMeTheMoney:smtm} = this.props;
    console.log(tiger,lion,cat);
    console.log(smtm);
    return (
      <div>
        <h1>Bpp</h1>
        <h1>{tiger ? '독수리' : '앵무새'}</h1>
        <h1>{lion ?  '독수리' : '앵무새'}</h1>
        <h1>{999}  {tiger.toString()}</h1>
      </div>
    );
  }
}

export default App;