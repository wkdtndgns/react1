import React, { Component } from 'react';
import Header from './Header admin';
import Footer from './Footer';
import './css/new.css'
import LoginForm from './LoginForm';
import { Routes, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;