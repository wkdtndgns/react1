import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      num : 10,
    }
    console.log('생성자 콜 1 ');
  }

  static getDerivedStateFromProps (props, stae) {
    console.log ('getDerivedStateFromProps 2 ');
    return {}
  }

  shouldComponentUpdate(){
    console.log(5);
    return true;
  }

  render() {
    console.log('render 3');
    return (
      <div>
      <h1>호랑이</h1>      
      <button 
        onClick={() => { 
          console.log('lamda')
          this.setState({ num: this.state.num + 10})
        }}>
          버튼  {this.state.num}</button>
      </div>
    );
  }
  componentDidMount(){
    console.log('componentDidMount 4')
  }
}

export default App;