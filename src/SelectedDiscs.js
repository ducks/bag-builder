import React from "react";

class SelectedDiscs extends React.Component {
  const { discs } = this.props;

  render() {
    return <p>{ discs }</p>;
  }
}
