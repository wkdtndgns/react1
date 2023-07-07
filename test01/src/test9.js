import React, { Component } from 'react';

/*
 클래스 { 
  함수(){
    this 사용
  }
 }
*/
class App extends Component {
  num = 10 ;
  f1(){console.log(this.num);}
  f2 =function(){ console.log(this.num);}
  f3 =  () => { console.log(this.num);}
  f4(){
   let t = this;
    (function(){
      console.log(t.num);
    })()
  }
  f5(){
    
  }
  render() {
    this.f1();
    this.f2();
    this.f3();
    this.f4();
    return (
      <div>
        
      </div>
    );
  }
}

/*

*/
export default App;