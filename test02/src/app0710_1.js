import React, { Component } from 'react';

const ADD = 'ADDITION';
const add = () => { return {type: ADD} }

class App extends Component {
  increase = () => {
    this.props.store.dispatch(add());
  }

  decrease = () =>{
    this.props.store.dispatch({type:'sub'});
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <h1>{this.props.store.getState().num}</h1>
        <button onClick={this.increase}>+버튼</button>
        <button onClick={this.decrease}>-버튼</button>
      </div>
    );
  }
}

const initState = {num : 100};
export const reducers = (state=initState, action) => {
  console.log(100,action.type);
  switch(action.type){
    case ADD: 
      console.log('ADD');
      return {num: state.num + 1}; 
    case 'sub': 
      return {num: state.num - 1}; 
    default: 
    console.log('DEFALUT');
      return state;
  }
  
  // state.num++;
  // state.num--;
}

export default App;