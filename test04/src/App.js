import axios from 'axios';
import React, { Component } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {a:[], b:[]};
  }
  f1 = ()=>{
    let res = [
      {id: 1, name: '호랑이1', salary: 100, bonus: 10 },
      {id: 2, name: '호랑이2', salary: 200, bonus: 20 },
    ];

    this.setState( {a: res}, ()=>{
      console.log(this.state);
      console.log(this.state.a[0]);
      console.log(this.state.a[0].id);
    });
  }
  f2 = ()=>{
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(
        <tr>
              <td>{i * 3 + 0}</td>
              <td>{i * 3 + 1}</td>
              <td>{i * 3 + 2}</td>
        </tr>
      );
    }
    this.setState( { b:result }, ()=>{
      console.log(this.state.b);
      console.log(this.state.b[0]);
      console.log('test');
      for (let i = 0; i < 2; i++) {
        console.log(reactElementToJSXString(this.state.b[i]));
      }
    });
  }
  tableAppend = ()=>{
    let result = [];
    for (let i = 0; i < this.state.a.length; i++) {
      result.push(
        <tr key={i}>
          <td>{this.state.a[i].id}</td>
          <td>{this.state.a[i].name1}</td>
          <td>{this.state.a[i].name2}</td>
        </tr>      
    );}
    return result
  }
  f3 = ()=>{
    let res = [
      {id: 1, name: '호랑이1', salary: 100, bonus: 10 },
      {id: 2, name: '호랑이2', salary: 200, bonus: 20 },
    ]
    this.setState( {a:res}, ()=>{ this.setState( {b: this.tableAppend()} ); } );
  }
  f4 = async() =>{
    axios.get('/cat/users',{})
    .then( (res)=>{
      this.setState({a:res.data}, ()=>{ this.setState({b: this.tableAppend()});});
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.f1}>클릭1</button><br/>
        <button onClick={this.f2}>클릭2</button><br/>
        <button onClick={this.f4}>클릭3</button><br/>
        <table border="1">
          <tbody>
            {this.state.b}
          </tbody>
        </table>
 
      </div>
    );
  }
}

export default App; 