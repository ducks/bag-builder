import React, { Component } from 'react';
import Brands from './Brands';
import './App.css';

class App extends Component {
  state = {
    selectedDiscs: []
  };

  listDiscs = () => {

  };

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <Brands />
        </main>
      </div>
    );
  }
}

export default App;
