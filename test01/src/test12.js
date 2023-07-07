import React, { Component } from 'react';
import pt from 'prop-types';
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Bpp tiger={'호랑이'} lion={1000}/>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    let { tiger,lion} = this.props;

    return (
      <div>
          <h1>Bpp</h1>
          <h1>{tiger} {lion}</h1>    
          <Cpp
          a = {10}
          b = {'tiger'}
          c = {true}
          d = { [0,1,2]}
          e = { {x:10,y:10} }
          f = { () => 999}
          />
      </div>
    );
  }
}

Bpp.prototypes ={
  tiger : pt.string,
  lion : pt.number
};

class Cpp extends Component {
  render() {
    let {a,b,c,d,e,f} = this.props;
    console.log(a,b,c,d,e);
    console.log(f());
    
    return (
      <div>
      </div>
    );
  }
}


Cpp.prototypes  ={
  a:pt.string,
  b:pt.string,
  c:pt.bool,
  d:pt.array,
  e:pt.object,
  f:pt.func
}

export default App;