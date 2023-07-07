import React, { Component } from 'react';

class App extends Component {
  num = 100;
  constructor(props){
    super(props);
    this.state={}
    console.log('생성자 콜 ');
  }

  f1(){
    console.log('함수 콜');
  }
  render() {
    this.f1();
    console.log('랜드 콜');
    return (
      <div>
        <h1>호랑이</h1>      
        <Bpp/>
      </div>
    );
  }
}
class Bpp extends Component {
  constructor(props){
    super(props);
    this.state={}
    console.log('Bpp 생성자 콜 ');
  }

  render() {
    console.log('Bpp랜드 콜')
    return (
      <div>
        <h1>Bpp</h1>
      </div>
    );
  }
}

export default App;