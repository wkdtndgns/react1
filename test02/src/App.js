import React, { Component } from 'react';
class App extends Component {
  increase = () => {
    console.log(this);
    console.log(this.props);
    this.props.store.dispatch({type:'add'});
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
  switch(action.type){
    case 'add': 
      return {num: state.num + 1}; 
    case 'sub': 
      return {num: state.num - 1}; 
    default: 
      return state;
  }
  
  // state.num++;
  // state.num--;
}

export default App;