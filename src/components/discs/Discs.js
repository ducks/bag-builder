import React from "react";

class Discs extends React.Component {
  render() {
    const discs = this.props.discs.map((disc, i) => (
      <li>
        <span>{ disc.name }</span>
      </li>
    ));

    return <ul>{ discs }</ul>;
  }
}

export default Discs;
