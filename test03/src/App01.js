import React, { Component } from 'react';
import { action, autorun, computed, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';

class Timer {
  secondsPassed = 0;
  test = 100; 

  get result(){
    console.log('result');
    return this.secondsPassed;
  }

  f1 = () =>{
    console.log(this.result);
  }
  
  constructor(){
    makeObservable( this,
      { 
        secondsPassed : observable, // 관찰대상 변수임을 알린다
        increase: action,   // 옵저버 변수를 갱신하는 함수 
        result :computed
      })
      autorun(() => {
        console.log('autorun');
      });

      autorun (() => { 
        // console.log('autorun2' , this.secondsPassed);
        console.log(1,this.result);  // 여기서 호출
        console.log(2,this.result);  // 여기서 호출 안함
        console.log(3,this.result);  // 여기서 호출 안함
        console.log(4,this.result);  // 여기서 호출 안함
        
        console.log(5,this.result);  // 여기서 호출        
      })
    // makeAutoObservable(this)
  }
  
  increase(){
    console.log('increase',this.secondsPassed);
    this.secondsPassed++;
    // this.test++;
  }
  increase2(){
    this.test++;
  }
}

const myTimer = new Timer();
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <h1>{myTimer.secondsPassed}</h1>
        <button onClick={()=> { myTimer.increase()}}>버튼1</button>
        <button onClick={()=> { myTimer.f1()}}>버튼2</button>
     
      </div>
    );
  }
}


// class Bpp extends Component {
//   render() {x
//     return (
//       <div>
//         <h1>Bpp</h1>
//         <h1>{myTimer.secondsPassed}</h1>
//         <button onClick={()=> { myTimer.increase()}}>버튼2</button>
//       </div>
//     );
//   }
// }
// observer(Bpp)

export default observer(App);