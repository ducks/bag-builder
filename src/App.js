import React, { Component } from 'react';
import ReactDOM from "react-dom";
import html2canvas from 'html2canvas';

import DiscOptions from './components/discs/DiscOptions';
import Table from './components/table/Table';
import Screenshot from './components/Screenshot';
import './css/App.css';
import STATE from './state.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = STATE;

    this.screenshotElement = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleclear.bind(this);
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

  handleclear(event) {
    console.log(event);
    event.preventDefault();
    event.target.reset();
  }

  handleSubmit(event) {
    const name = this.state.form.name;
    const type = this.state.form.type;
    const stability = this.state.form.stability;

    if (!name || !type || !stability) {
      event.preventDefault();
      return;
    };

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
      },
      form: {
        name: '',
        type: '',
        stability: ''
      }
    }), () => {
      console.log('Disc added!');
    });

    event.preventDefault();
  }

  takeScreenshot = e => {
    const canvas = document.getElementsByTagName('canvas')[0];

    if (canvas) {
      document.body.removeChild(canvas);
    }

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
