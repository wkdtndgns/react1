import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to={'/'}> 홈페이지</Link><br/>
        <Link to={'/cpp'}>이동</Link>
       
        <Routes>
          <Route path='/' element={<Bpp/>} />
          <Route path='/cpp' element={<Cpp/>} />
        </Routes>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>Bpp</h1>
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>
        <h1>Cpp</h1>
      </div>
    );
  }
}

export default App;