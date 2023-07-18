import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  f1 = () => {
    axios.post('/api/Swtool', {})
    .then(res => {
      console.log('f1', res,res.data);
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.f1()}}>버튼</button>
      </div>
    );
  }
}

export default App;