import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const data = [
  { 군구: '광진구', 유동인구수: 32760, 비유동인구수: 34000 },
  { 군구: '동대문구', 유동인구수: 30480, 비유동인구수: 56000 },
  { 군구: '마포구', 유동인구수: 27250, 비유동인구수: 23000 },
  { 군구: '구로구', 유동인구수: 49870, 비유동인구수: 67000 },
  { 군구: '강남구', 유동인구수: 51420, 비유동인구수: 55000 },
]; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      append_FPList:data
    }
  }

  f1 = ()=>{
    console.log('test');
    axios.get(' http://3.39.18.171:5001/users ')
    .then( (res)=>{
      console.log(res.data.entry);
      this.setState( {
        append_FPList:res.data.entry} 
      );
    } )
  }
  render() {
    return (
      <div>
        <h1>App</h1>
               <button onClick={this.f1}>버튼</button>

        <LineChart width={1000} height={300} data={this.state.append_FPList} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
        <CartesianGrid strokeDasharray="4 3" />
        <XAxis dataKey="군구"/><YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="유동인구수" stroke="#ff0000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="비유동인구수" stroke="#82ca9d" />
      </LineChart> 
      </div>
    );
  }
}

export default App;