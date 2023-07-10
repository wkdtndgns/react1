import React, { Component } from 'react';
import { handleActions } from 'redux-actions';
import { connect, useDispatch, useSelector } from 'react-redux';
class App extends Component {
  render() {

    return (
      <div>
        <h1>App</h1>
        <h1>{this.props.num}</h1>
        <h1>--------</h1>
        <ConnectBpp />
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>Bpp</h1>
        <h1>{this.props.num}</h1>
        <button onClick={this.props.onInc}> +버튼 </button>
        <button onClick={this.props.onDec}> -버튼 </button>
      </div>
    );
  }
}

const Inc = 'INC';
const getInc = (i) => { 
    
   return  { type: Inc, add : i   } }
const Dec = 'DEC';

const initState = {num : 100};
export const reducers =  handleActions({
  [Inc]: (state, action ) => {
    console.log(action);
    return {num: state.num + 1}} ,
  [Dec]: (state, action ) => ({ num: state.num - 1 }),
},initState); 

// hooks 
const ConnectBpp = () =>{
  const num = useSelector(state => { 
    return state.num}
    );

  const dispatch = useDispatch();
  return( <Bpp num={num} 
    onInc={()=> {dispatch(getInc(3))}}
    onDec={()=> {dispatch({ type: Dec })}}
    />); 
}


const stateToProps = (state) => ({num: state.num})
const AppWithNum = connect(stateToProps)(App);

export default AppWithNum;