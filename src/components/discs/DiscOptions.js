import React from "react";

import Input from '../form/Input';
import Select from '../form/Select';

import STATE from '../../state.json';

class DiscOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = STATE;
  };

  render() {
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
        <Input
          title = { 'Disc Name' }
          value = { this.props.form.name }
          name = { 'name' }
          placeholder = { 'Choose disc' }
          handleChange={ this.props.handleChange }>
        </Input>
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
