import React, { Component , useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './form.css';

class App extends Component {
  f1 = () => {
    axios.post('/', {})
    .then( res => {
      console.log(res,res.data);
    });
  }
  f2 = () => {
    axios.get('/tiger', {})
    .then( res => {
      console.log(res,res.data);
    });
  }
  f3 = () => {
    axios.post('/tiger', {})
    .then( res => {
      console.log(res,res.data);
    });
  }
  f5 = () =>{
    axios.post('/user/?value=1',{})
    .then( (res)=>{
      console.log('f5',res.data);
    });
  }
  f6 = () =>{
    axios.post('/user/?value=2',{})
    .then( (res)=>{
      console.log('f5',res.data);
    });
  }
  f7 = () =>{
    axios.get('/tiger',{})
    .then( (res)=>{
      console.log('f7',res.data);
    });
  }  
  f8 = () =>{
    axios.get('/tiger/lion',{})
    .then( (res)=>{
      console.log('f8',res.data);
    });
  }  
  f9 = () =>{
    axios.get('/cat?value=2',{})
    .then( (res)=>{
      console.log('f9',res.data);
    });
  }  
  f10 = () =>{
    axios.get('/cat/cat',{})
    .then( (res)=>{
      console.log('f10',res.data);
    });
  }  
  f11 = () =>{
    axios.get('/tiger?monkey=99',{})
    .then( (res)=>{
      console.log('f11',res.data);
    });
  }  
  f12 = () =>{
    axios.get('/tiger/99',{})
    .then( (res)=>{
      console.log('f12',res.data);
    });
  }  
  select = () =>{
    axios.get('/cat/users',{})
    .then( (res)=>{
      console.log('select',res.data);
    });
  }
  insert = () =>{

  }
  update = () => {

  }
  render() {
    return (
      <div> 
       <div style={ {margin: '5% 0 5% 0'}}>
          <button onClick={() => {this.select()}}>검색</button><br/>
        </div>
        <Bpp/>
        <Cpp/>
      </div>
    );
  }
}

export default App;

function Bpp(props) {
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");


  function onSubmit(param){
    axios.post('/cat/user', param)
    .then((res) => console.log(res));
  }
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input {...register("name")} placeholder="name" />
      <input {...register("email")} placeholder="email" />
      <input type="submit" />
    </form>
  );
}

function Cpp(props) {
  const [num, setNum] = useState("");
  function delUser(params) {
    axios.delete('/cat/user/'+num)
    .then((res) => console.log(res));
  }
  return (
    <div>
      <input type='number' style={ {width: '100px'}}onChange={(e)=> setNum(e.target.value)} /> 
      <button onClick={() => delUser()}>삭제</button><br/>
    </div>
  );
}

function Dpp(props) {
  const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");
  function onSubmit(param){
    axios.put('/cat/user', param)
    .then((res) => console.log(res));
  }
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input {...register("name")} placeholder="name" />
      <input {...register("email")} placeholder="email" />
      <input type="submit" min="0"/>
    </form>
  );
}