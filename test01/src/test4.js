import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      num : 10,
    }
  }

  f1() { console.log(1);}
  f2() { console.log(2);}
  f3() { console.log(this);}
  f4 = () => { console.log(this);}
  f5  = function(){
    console.log(this);
  }
  
  render() {
    return (
      <div>
          <button onClick={() => { this.f1(); }}> 버튼1 </button> <br/>
          <button onClick={this.f2}> 버튼2 </button><br/>
          <button onClick={this.f3}> 버튼3 </button><br/>
          <button onClick={this.f4}> 버튼4 </button><br/>
          <button onClick={this.f5}> 버튼5 </button><br/>
          <button onClick={this.f5}> 버튼5 </button><br/>
          
      </div>
    );
  }
}

export default App;