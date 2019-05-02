import React, { Component } from 'react';
import Brands from './Brands';
import Grid from './Grid';
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
          <Grid />
        </main>
      </div>
    );
  }
}

export default App;
