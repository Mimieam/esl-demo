import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import MatchList from './components/MatchList';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
        <Header/>
        <MatchList/>
        </div>
      </div>
    );
  }
}

export default App;
