import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.aaa = React.createRef();
    this.bbb = React.createRef();
  }

  f1(){
    console.log(1);
    document.getElementById('lion').textContent = '호랑이';  
  }

  f2 = () => {
    console.log(2);
    this.aaa.current.textContent = '앵무새';
  }

  f4 = a =>b => a + b;
  

  f3 = () => { 
    var  a = this.f4(10)(20);
    console.log(a);
  }

  render() {
    return (
      <>
        <button id='tiger'
        ref={this.aaa}
        onClick={this.f1}> 버튼</button><br/>

     <button id='lion'
        ref={this.bbb}
        onClick={this.f2}> 버튼</button><br/>
        

        <button onClick={this.f3}> 버튼3</button>


      </>
    );
  }
}

export default App;