import React, { Component, PureComponent } from 'react';
import {shallowEqualObjects} from 'shallow-equal';

//npm install --save shallow-equal


class App extends Component {
    constructor(parentProps){
        super(parentProps);
        this.state = {num:100};
    }

    f1(){
        this.setState({num:this.state.num+1});
    }
    f2(){
        this.setState({num:100});
    }

    shouldComponentUpdate( a, nextState){
        console.log(999, a,nextState);
        console.log(888, this.state,nextState); //next state는 현재 반영되지 않은, 갱신될 예정의 값이다!
        console.log(shallowEqualObjects(this.state, nextState)) //서로 다르면 false, 같으면 true!

        return !shallowEqualObjects(this.state, nextState); //true반환시 rend 업데이트. 
    }
    render() {
        console.log("App");

        return (
            <div>
                <button onClick={()=>{this.f1()}}> ButtonApp</button>
                <button onClick={()=>{this.f2()}}> ButtonAppNotChange</button>

                <Bpp></Bpp>
            </div>
        );
    }
}

export default App;

class Bpp extends PureComponent {
    constructor(parentProps){
        super(parentProps);
        this.state = {num:100};
    }

    f1(){
        this.setState({num:100});
    }
    render() {
        console.log("Bpp");
        return (
            <div>
                <button onClick={()=>{this.f1()}}> ButtonBpp</button>
            </div>
        );
    }
}
