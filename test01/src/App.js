import React, { Component } from 'react';
import './App.css'
// import Bpp,{Cpp,Dpp} from './Bpp';

class App extends Component {
  // 멤버 변수 . 
  // 멤버 함수 .
  // render <<< 멤버 함수.
  render() {
    console.log(1000);

    return (
      <div>
        <h1>App</h1>
        <Bpp/>
      
      
      </div>
    );
  }
}
class Bpp extends Component {
  render() {
    console.log(2000);
    return (
      <div>
        <h1>Bpp</h1>
      </div>
    );
  }
}

export default App;
