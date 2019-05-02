import React, { Component } from 'react';

import DiscOptions from './DiscOptions';
import Grid from './Grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "selectedDiscs": {
        "putters": {
          "vos": [],
          "os": [],
          "stable": [],
          "us": [],
          "vus": []
        },
        "midranges": {
          "vos": [],
          "os": [],
          "stable": [],
          "us": [],
          "vus": []
        }
      }
    };
  }

  listDiscs = () => {

  };

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <Grid 
            selectedDiscs={ this.state.selectedDiscs } />
          <DiscOptions />
        </main>
      </div>
    );
  }
}

export default App;
