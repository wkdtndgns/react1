import React, { Component } from 'react';

class App extends Component {
  f1(){
    let ar  =[1,2,3,4];
    let result = [];
    ar.forEach(v =>{
      result.push(v*2);
    });
    console.log(result);
  }

  f2(){
    let ar  = [1,2,3,4];
    let result = ar.map(v =>v *2);
    console.log(result);
  }

  render() {
    this.f1();
    this.f2();
  
    return (
      <div>
        
      </div>
    );
  }
}

export default App;