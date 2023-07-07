import React, { Component } from 'react';

class App extends Component {
  f1(){
    let F1 = 
      (() => { 
        function F1(argNum){
          this.num = argNum;
          F1.prototype.showNum = function(){
            console.log(this.num);
          }
        } 
          return F1;
      } )();

      let ins = new F1(999);
      console.log(ins.num);
      ins.showNum();
  }

  f2(){
    class F1{
      constructor(argNum){
        this.num = argNum;
      }
      showNum(){
        console.log(this.num);
      }     
    }
    let ins = new F1(999);
    console.log(ins.num);
    ins.showNum();

  }
  render() {
    this.f1()
    this.f2();
    return (
      <div>
        
      </div>
    );
  }
}

export default App;