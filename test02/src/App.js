import React, { Component } from 'react';
import {createAction, handleActions} from 'redux-actions';
import { useSelector, useDispatch } from 'react-redux';
import BppContainer from './containers/BppContainer'
import CppContainer from './containers/CppContainer';
import Dpp from './component/Dpp'
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <BppContainer/>
        <CppContainer/>
        <Dpp/>
      </div>
    );
  }
}

export default App;