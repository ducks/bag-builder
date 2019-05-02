import React from 'react';
import Cell from './Cells';

class Grid extends React.Component {
  renderCell(i) {
    return <Cell value={ i } />;
  }

  render() {

    return (
      <div class="grid">
        { this.renderCell("Very OS") }
        { this.renderCell("OS") }
        { this.renderCell("Stable") }
        { this.renderCell("US") }
        { this.renderCell("Very US") }

        { this.renderCell("Very OS") }
        { this.renderCell("OS") }
        { this.renderCell("Stable") }
        { this.renderCell("US") }
        { this.renderCell("Very US") }
      </div>
    );
  }
}

export default Grid;
