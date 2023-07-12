import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import totalStore from './store'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => {totalStore.ts.inc()}}>버튼</button><br/>
        <h1>{totalStore.ts.count}</h1>
        <button onClick={() => {totalStore.ls.inc()}}>버튼</button><br/>
        <h1>{totalStore.ls.count}</h1>
        <hr/>
      </div>
    );
  }
}

export default observer(App);