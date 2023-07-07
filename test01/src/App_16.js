import React, { Component } from 'react';
//State를 활용하기 

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:10,
        }
    }
    render() {
        console.log(this.state.num);
        let {num} = this.state;
        return (
            <div>
                <h1>{this.state.num}</h1>
                <h1>{num}</h1>
                <Bpp tiger='호랑이'></Bpp>
            </div>
        );
    }
}

export default App;


class Bpp extends Component {
    constructor(props){
        super(props);
        console.log('Bpp constructor',props);
        this.state = {
            num:20,
            tiger:props.tiger,
        }
        console.log('Bpp state',this.state);
    }
    render() {
        let {num, tiger} = this.state;
        return (
            <div>
                <h1>Gello</h1>
                <h1>{num}</h1>
                <h1>{tiger}</h1>

            </div>
        );
    }
}
