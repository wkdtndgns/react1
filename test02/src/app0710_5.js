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
  constructor(){
    super();
    this.aaa = React.createRef();
    this.state = { num: 0};
  }
  
  render() {
    const onClick = (e) => {
       this.props.dispatch( this.props.inc(parseInt(this.aaa.current.value)))
    }
    
    return (
      <div>
        <h1>Bpp</h1>
        <h1>{this.props.num}</h1>
        <input type="number" ref={this.aaa} defaultValue={this.state.num} />
        <button onClick={onClick}> +버튼 </button>
      </div>
    );
  }
}

const Inc = 'INC';
const getInc = (i) => { return { type: Inc , add : i } };
const Dec = 'DEC';
const getDec =() => ({ type: Dec });

const initState = {num : 100};
export const reducers =  handleActions({
  [Inc]: (state, action ) => { 
    console.log(action,'reducer');

    return {num: state.num + action.add}
   },
  [Dec]: (state, action ) => ({ num: state.num - 1 }),
},initState); 

// hooks 
const ConnectBpp = () =>{
  const {num} = useSelector(state => { return state} );

  const dispatch = useDispatch();
  return( <Bpp num={num} dispatch = {dispatch} />); 
}

const stateToProps = (state) => ({num: state.num})
const AppWithNum = connect(stateToProps)(App);
export default AppWithNum;