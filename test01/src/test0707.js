import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  f1(){
    console.log(1);
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  f2 = () =>{
    new Promise ((r1,r2) =>{
      console.log(1);
      r2();
    }).then( (result) => {
    console.log(result);
    return 'lion'
  }).catch( ()=> {})
}

f3(e){
  console.log(e);
}

f4(e){
  console.log('f4 call', e) ;
}
  render() {
    return (
      <div>
        <button onClick={this.f1}>버튼1</button><br/>     
        <button onClick={this.f2}>버튼2</button><br/>       
        <button onClick={e =>{ 
          console.log('1000',e);
          this.f3(e);
      }}>버튼3 </button><br/>
      <button onClick={this.f4 }>버튼4</button><br/>
     
      </div>
    );
  }
}

export default App;