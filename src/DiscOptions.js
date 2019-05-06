import React from "react";

import brands from './disc-list.json';
import Discs from './Discs';
import Select from './Select';

class DiscOptions extends React.Component {
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

  render() {
    const discs = this.getDiscs(brands);

    const options = discs.map((disc, i) => (
      { title: disc, value: disc }
    ));

    const types = [
      { title: 'Putter', value: 'putters' },
      { title: 'Midrange', value: 'midranges' },
      { title: 'Fairway', value: 'fairway' },
      { title: 'Control', value: 'control' },
      { title: 'Distance', value: 'distance' }
    ];

    const stabilities = [
      { title: "Very Overstable", value: "vos" },
      { title: "Overstable", value: "os" },
      { title: "Stable", value: "stable" },
      { title: "Understable", value: "us" },
      { title: "Very Understable", value: "vus" },
    ];

    return (
      <form
        onSubmit={ this.props.handleSubmit }>
        <Select
          title = { 'Disc Name' }
          value = { this.props.form.name }
          name = { 'name' }
          options = { options }
          placeholder = { 'Choose disc' }
          handleChange={ this.props.handleChange }>
        </Select>
        <Select
          title = { 'Disc Type' }
          value = { this.props.form.type }
          name = { 'type' }
          options = { types }
          placeholder = { 'Choose disc type' }
          handleChange={ this.props.handleChange }>
        </Select>
        <Select
          title = { 'Disc Stability' }
          value = { this.props.form.stability }
          name = { 'stability' }
          options = { stabilities }
          placeholder = { 'Choose disc stability' }
          handleChange={ this.props.handleChange }>
        </Select>
        <button type="submit">Add Disc</button>
      </form>
    )
  }
}

export default DiscOptions;
