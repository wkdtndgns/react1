import React, { Component } from 'react';

const {Provider,Consumer} = React.createContext();

class App extends Component {
  constructor(props){
    super(props);
    this.state = { num: 0,};
  }
  f1= () =>{
    this.setState({num:this.state.num +1 })
  }
  render() {
    let tiger = {...this.state,f1:this.f1}
    console.log(tiger);
    return (
      <div>
        <Provider value={tiger}>
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
           { (cv) => <button onClick={cv.f1}>플러스</button> }
        </Consumer>
        <Consumer>
           { (cv) => <h1>{`return : ${cv.num} `}</h1> }
        </Consumer>
        
        <h1>Cpp</h1>
      </div>
    );
  }
}

export default App;