import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Bpp tiger="호랑이" lion='사자'/>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    console.log(this.props.tiger , this.props.lion)
    return (
      <div>
        <h1> bpp</h1>
        <h1>{this.props.tiger}</h1>
        <h1>{this.props.lion}</h1>
        <Cpp dog='강아지' cat={this.props.lion + '문자열'}/>
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    console.log(this.props);
    let obj = {a:1,b:2}
    let {a,b } =obj;
    console.log(a,b);
    let {dog,cat} = this.props;
    return (
      <div>
        <h1>Cpp</h1>
        <h1>{this.props.dog}</h1>
        <h1>{this.props.cat}</h1>
        <h1>{dog} {cat}</h1>
        
      </div>
    );
  }
}

export default App;