import React, { Component } from 'react';
import ReactDOM from "react-dom";
import html2canvas from 'html2canvas';

import DiscOptions from './components/discs/DiscOptions';
import Table from './components/table/Table';
import Screenshot from './components/Screenshot';
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

    this.screenshotElement = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.takeScreenshot = this.takeScreenshot.bind(this);
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

  takeScreenshot = e => {
    console.log(ReactDOM.findDOMNode(this.refs.screenshotElement));

    html2canvas(document.getElementsByTagName('table')[0])
      .then(function(canvas) {
      document.body.appendChild(canvas);
    });
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <Table 
            ref = { element => this.screenshotElement = element }
            selectedDiscs={ this.state.selectedDiscs } />
          <DiscOptions
            form={ this.state.form }
            handleSubmit={ this.handleSubmit }
            handleChange={ this.handleChange } />
          <Screenshot
            onClick={ this.takeScreenshot } />
        </main>
      </div>
    );
  }
}

export default App;
