import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import MainRoutes from './components/MainRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainRoutes />
      </div>
    );
  }
}

export default App;
