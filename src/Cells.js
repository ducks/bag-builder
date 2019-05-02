import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <span className="cell">
        { this.props.value }
      </span>
    );
  }
}

export default Cell;
