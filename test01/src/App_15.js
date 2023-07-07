import React, { Component } from 'react';
//Tag를 넘길 수 있다!
class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <Bpp><h1>호랑이</h1></Bpp>
            </div>
        );
    }
}



class Bpp extends Component {
    render() {
        let {children} = this.props;
        console.log(this.props);
        console.log(this.props.children);
        return (
            <div>
                <h1>Bpp</h1>
                {this.props.children} 
                {children}
            </div>
        );
    }
}

export default App;