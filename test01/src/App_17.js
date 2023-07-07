
import React, { Component } from 'react';
//this를 사용하려면 람다로 설정해줘야
class App extends Component {
    constructor(props){
        super(props);
        this.state = {num:100};
    }
    f1 = ()=>{
        this.state.num = 200;
    }
    f2 = ()=>{
        this.setState({num: this.state.num + 1});

    }

    f3(){
        console.log(this.state.num);

    }

    count = 100;
    f4= ()=>{
        this.count+= 1;
        console.log(this.count);
        this.forceUpdate();
    }
    render() {
        console.log(this.state.num);
        return (
            <div>
                <h1>App</h1>
                <h1>{this.state.num}</h1>
                <h1>{this.count}</h1>

                <button onClick={this.f1}>Button</button>
                <button onClick={this.f2}>Button2</button>
                <button onClick={()=>{this.f3()}}>Button3</button>
                <button onClick={()=>{this.f4()}}>Button4</button>

            </div>
        );
    }
}

export default App;