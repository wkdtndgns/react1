import React, { Component } from 'react';

class App extends Component {

f1(){ console.log(1)}
f2(){ console.log(2)}
f3(){ console.log(3)}
  render() {
    this.f1();
    this.f2();
    this.f3();
    
    function f4(){console.log(4)} f4();
    const f5 =function(){console.log(5)}; f5();
    const f6 = () => {console.log(6)}; f6();
    (() => {console.log(7)})();
    (function(){
      console.log(8);
    })();

    let obj = {
      f9 : function(){ console.log(9)},
      f10 :() => { console.log(10)},
    }

    obj.f9();
    obj.f10();

    function F11(){
      this.f12 = function(){console.log(12)};
      this.f13 = () => {console.log(13);};
    }

    F11.prototype.f14 = function(){ console.log(14)};
    F11.prototype.f15 = () =>{ console.log(15)};
    let ins = new F11();
    ins.f12(); ins.f13(); ins.f14(); ins.f15();

    class Tiger { 
      f16(){ console.log(16)} 
      f17 = function(){ console.log(17)}
      f18 = () =>{console.log(18)};
    }

    let t = new Tiger();
    t.f16(); t.f17(); t.f18();
    

    return (
      <div>
        
      </div>
    );
  }
}

export default App;