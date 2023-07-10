import React, { Component } from 'react';
import { connect } from 'react-redux';
import {handleActions} from 'redux-actions';

class App extends Component {
  render() {
    console.log(this.props.store.getState().num);
    let {num} = this.props.store.getState();
    return (
      <div>
        <h1>App</h1>
        <h1>{num} </h1>
        <button onClick={this.props.onInc}> +버튼 </button>
        <button onClick={this.props.onDec}> -버튼 </button>
      </div>
    );
  }
}

const Inc = 'INC';
const getInc = { type: Inc };


const Dec = 'DEC';
const getDec = { type: Dec };

// 1. 
const dispatchToProps = (dispatch) => (
  { 
    onInc: () => {dispatch(getInc);},
    onDec: () => {dispatch(getDec)}
});

// 2. 
const initState = {num : 100};
export const reducers =  handleActions({
  [Inc]: (state, action ) => ({ num: state.num + 1 }),
  [Dec]: (state, action ) => ({ num: state.num - 1 }),
},initState); 

// 3.
const stateToProps = (state) => ({num: state.num})

export default App = connect(
  stateToProps,
  dispatchToProps
)(App);