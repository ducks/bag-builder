import React, { Component } from 'react';

import DiscOptions from './DiscOptions';
import Table from './components/table/Table';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "form": {
        "name": '',
        "type": '',
        "stability": ''
      },
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
        },
        "fairway": {
          "vos": [],
          "os": [],
          "stable": [],
          "us": [],
          "vus": []
        },
        "control": {
          "vos": [],
          "os": [],
          "stable": [],
          "us": [],
          "vus": []
        },
        "distance": {
          "vos": [],
          "os": [],
          "stable": [],
          "us": [],
          "vus": []
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(updater => ({
      form: {
        ...updater.form,
        [name]: value,
      }
    }));
  }

  handleSubmit(event) {
    const name = this.state.form.name;
    const type = this.state.form.type;
    const stability = this.state.form.stability;

    this.setState(updater => ({
      selectedDiscs: {
        ...updater.selectedDiscs,
        [type]: {
          ...updater.selectedDiscs[type],
          [stability]: [
            ...updater.selectedDiscs[type][stability],
            name
          ]
        }
      }
    }), () => {
      alert('Disc added!');
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <Table 
            selectedDiscs={ this.state.selectedDiscs } />
          <DiscOptions
            form={ this.state.form }
            handleSubmit={ this.handleSubmit }
            handleChange={ this.handleChange } />
        </main>
      </div>
    );
  }
}

export default App;
