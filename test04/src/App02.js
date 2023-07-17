import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }

  f1 = () => {
    axios.get('/users/2', {tiger: '호랑이'})
    .then( res => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.msg);
    });
  }

  f2 = () => {
    axios.post('/users/2', {tiger: '호랑이'})
    .then( res => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.tiger);
    });
  }

  f3 = (e) => {
    e.preventDefault();
    axios.post('/users/2', {tiger: '호랑이2'})
    .then( res => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.tiger);
    });
  }

  onClickServerRequest4 = (e) => {
    e.preventDefault();

    console.log(e.target);
    axios.post('/users/2', e.target)
    .then((res) => console.log(res));
  }

  onHandleChangeName = (e) => {
    this.setState({ name: e.target.value });
  }
  
  render() {
    return (
      <div>
        <button onClick={() => {this.f1()}}>클릭</button><br/>
        <button onClick={() => {this.f2()}}>클릭</button><br/>
        <form onSubmit={(e) => this.onClickServerRequest4(e)}>
          <input type="text" name='name'  />
          <button type='submit'>로그인</button>
        </form>
      </div>
    );
  }
}

export default App;