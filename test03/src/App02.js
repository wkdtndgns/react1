import React, { Component } from 'react';
import { autorun, makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Animal {
  energyLevel;

  constructor(name) {
      this.energyLevel = 100;
      makeAutoObservable(this);

      autorun(() => {
        console.log('-------- autorun --------');
        console.log(this.isHungry);
      })
  }

  // 옵져버 변수가 갱신되면 
  //     - 옵져버 변수를 사용하는 autorun이 콜된다. 
  //     - 옵져버 변수를 사용하는 컴퓨터 함수를 콜한다. 
  reduceEnergy() {
      console.log('reduceEnergy');
      this.energyLevel -= 10;
  }

  get isHungry() {
      console.log('isHungry : ', this.energyLevel);
      return this.energyLevel < 75;
  }
}

console.log("********* start ***********")
const giraffe = new Animal("Gary");
for (let i = 0; i < 6; i++) {
  giraffe.reduceEnergy();
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <hr/>
      </div>
    );
  }
}

export default observer( App ); 