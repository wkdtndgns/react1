import React, { Component } from 'react';

const {Provider,Consumer} = React.createContext();

class App extends Component {
  render() {
    let title = '호랑이';
    return (
      <div>
        <Provider value={title}>
            <Bpp/>   
        </Provider>
      </div>
    );
  }
}
class Bpp extends Component {
  render() {
    return (
      <div>
        <Cpp/>       
      </div>
    );
  }
}
class Cpp extends Component {
  render() {
    return (
      <div>
        <Consumer>
           { (cv) => <h1>{cv}</h1> }
        </Consumer>
        <Consumer>
           { (cv) => <h1>{`return : ${cv} `}</h1> }
        </Consumer>
        
        <h1>Cpp</h1>
      </div>
    );
  }
}

export default App;