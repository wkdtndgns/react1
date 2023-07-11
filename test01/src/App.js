import React, { Component } from 'react';
class App extends Component {
  increase = () => {
    console.log(this);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={this.increase}>버튼</button>
      </div>
    );
  }
}

const initState = {num : 100};
export const reducers = (state=initState, action) => {
  switch(action.type){
    case 'add': 
      return {num: state.num + 1}; 
    default: 
      return state;
  }
  
  // state.num++;
  // state.num--;
}

export default App;