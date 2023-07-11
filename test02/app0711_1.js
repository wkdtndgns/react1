import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction, handleActions } from 'redux-actions';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ConnectBpp1 />
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
        <button onClick={this.props.onInc}>증가</button>
        {/* <ConnectCpp/> */}
      </div>
    );
  }
  componentDidUpdate(){
    console.log(5, 'componentDidUpdate');
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>
        <h1>Cpp</h1>
        <h1>{this.props.num}</h1>
        <button onClick={this.props.onInc}>증가</button>
      </div>
    );
  }
}

const INC = 'INC';
const inc = () =>({type:INC});
const initState = { num:100 }

export const reducers = handleActions({
    [INC]:(state, action) => {
      console.log(2, 'reducers');
      return {num: state.num + 1} 
    },
  }, initState 
);


const ConnectBpp = ({ num, dispatch }) => {
  return <Bpp num={num} onInc={() => dispatch(inc())} />;
};

const mapStateToProps = state => {
  console.log(3, 'Bpp stateToProp', state);
  return { num: state.num };
};

export const ConnectBpp1 = connect(mapStateToProps)(ConnectBpp);

const ConnectCpp = () => {
  const num = useSelector( state => {
    console.log(3, 'Cpp stateToProp', state);
    return state.num; 
  });

  const dispatch = useDispatch();
  return ( <Cpp num={num} onInc={()=> { console.log(1, 'dispatch'); return dispatch(inc()) } } /> )
};

export default App; 