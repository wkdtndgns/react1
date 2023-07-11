import React, { Component } from 'react';
// import Bpp from './Bpp';
// import Cpp from './Cpp';

class App extends Component {
  render() {
    return (
      <div>
       <h1>App</h1> 
       <BBpp/>
       <CCpp/>

      </div>
    );
  }
}


class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>호랑이1</h1>
        <h1>호랑이2</h1>
        <h1>호랑이3</h1>
      </div>
    );
  }
}

function withF1(Hoc){
  return class CommonComponent extends Component{
  render(){
      return(
        <>
          <h1>목록</h1>
          <Hoc/>
        </>
      );
    }
}
}


class Cpp extends Component {
  render() {
      return (
          <div>
              <h1>코끼리1</h1>
              <h1>코끼리2</h1>
              <h1>코끼리3</h1>
          </div>
      );
  }
}

let BBpp = withF1(Bpp);
let CCpp = withF1(Cpp);

export default App;