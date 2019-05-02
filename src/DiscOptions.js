import React from "react";

import brands from './disc-list.json';
import Discs from './Discs';

class DiscOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDiscs(brands) {
    let allDiscs = [];

    brands.forEach(brand => {
      let discs = brand.discs;

      discs.forEach(disc => {
        disc.plastics.forEach(plastic => {
          allDiscs.push(`${plastic} ${disc.name}`);
        });
      });
    });

    return allDiscs;
  }

  handleChange(event) {
    this.setState({ 
      type: event.target.type,
      value: event.target.value 
    });
  }

  handleSubmit(event) {
    alert('disc selected');
    event.preventDefault();
  }

  render() {
    const discs = this.getDiscs(brands);

    const options = discs.map((disc, i) => (
      <option key={ i } value={ disc }>{ disc }</option>
    ));

    return (
      <form name="discOptions" onSubmit={ this.handleSubmit }>
        <select 
          value={ this.state.value } 
          onChange={ this.handleChange }>
          <option value="">Select disc</option>
          { options }
        </select>
        <select
          value={ this.state.discType }
          onChange={ this.handleChange }>
          <option value="putter.vos">Very OS Putter</option>
        </select>
        <button type="submit">Add Disc</button>
      </form>
    )
  }
}

export default DiscOptions;
