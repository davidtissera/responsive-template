import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../src/Router';
import './App.css';
import './normalize.css';

class App extends Component {

  render(){

    return (
      <div className="App">
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;