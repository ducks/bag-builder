import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <td className="cell">
        { this.props.value }
      </td>
    );
  }
}

export default Cell;
