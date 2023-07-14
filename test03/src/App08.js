import {debounce, throttle} from 'lodash';
import React, { Component } from 'react';
class App extends Component {
  f1 = debounce( (e) =>{
    console.log(1);
  },1000);

  f2 = throttle ( () => { 
    console.log(2);
  },3000)

  render() {
    return (
      <div>
        <h1>App</h1>
        <input type='text' onChange={(e)=>{this.f1(e)}}/>  
        <input type='text' onChange={(e)=>{this.f2(e)}}/>  
    
      </div>
    );
  }
}
