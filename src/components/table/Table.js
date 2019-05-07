import React from 'react';
import Cell from './Cells';

class Table extends React.Component {
  renderCell(value) {
    const disc = value;

    return (
      <Cell 
        value={ disc } />
    )
  }

  render() {
    const data = this.props;

    let rows = {
      putters: [],
      midranges: [],
      fairway: [],
      control: [],
      distance: []
    }

    for (let k in data.selectedDiscs) {
      for (let j in data.selectedDiscs[k]) {
        rows[k].push(this.renderCell(data.selectedDiscs[k][j]));
      }
    }

    return (
      <table className="grid">
        <thead>
          <tr>
            <th>Bag Matrix</th>
            <th>Very OS</th>
            <th>OS</th>
            <th>Stable</th>
            <th>US</th>
            <th>Very US</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Putter</th>
            { rows.putters }
          </tr>
          <tr>
            <th>Midrange</th>
            { rows.midranges }
          </tr>
          <tr>
            <th>Fairway</th>
            { rows.fairway }
          </tr>
          <tr>
            <th>Control</th>
            { rows.control }
          </tr>
          <tr>
            <th>Distance</th>
            { rows.distance }
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
