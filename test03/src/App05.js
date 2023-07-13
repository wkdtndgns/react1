import React, { Component } from 'react';
// import './App.css'
import {createAction, handleActions} from 'redux-actions';
import { useSelector, useDispatch } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ConnectBpp/>
      </div>
    );
  }
}

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

// reducers
const INC = 'INC';
const DEC = 'DEC';

const inc = createAction(INC)
const dec = createAction(DEC)

const initState = {
  num:100
}

export const reducers = handleActions(
  {
    [INC]:(state, action) => { 
      console.log('reducer');
      return ({num: state.num + 1}) 
    },
    [DEC]:(state, action) => ({num: state.num - 1})
  },
  initState
);


// connect( hooks )
const ConnectBpp = () => {
  const num = useSelector( 
    state => { 
      console.log('state');
      return state.num;
  } );

  const dispatch = useDispatch();
  return (
    <Bpp num={num}
      onInc={
        ()=> { 
          console.log('dispatch');
          return dispatch(inc()) 
        }
      }
      onDec={()=>dispatch(dec())}
    />
  )
};

export default App; 