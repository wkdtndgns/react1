import React, { Component } from 'react';
import Post from './component/Post';
import MyGrid from './component/MyGrid';
import Table from './component/Table';
class App extends Component {
  render() {

    return (
      <div>
        <Post/> 
        <Table/>
      </div>
    );
  }
}

export default App;