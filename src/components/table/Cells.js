import React from 'react';

class Cell extends React.Component {
  render() {
    let rows = [];

    if (this.props.value) {
      this.props.value.forEach((v) => (
        rows.push(<p key={ v }>{ v }</p>)
      ));
    }

    return <td className="cell">{ rows }</td>;
  }
}

export default Cell;
