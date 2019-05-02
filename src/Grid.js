import React from 'react';
import Cell from './Cells';

class Grid extends React.Component {
  renderCell(value) {
    return (
      <Cell 
        value={ this.props.selectedDiscs.value } />
    )
  }

  render() {

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
            { this.renderCell("putter.vos") }
            { this.renderCell("putter.os") }
            { this.renderCell("putter.stable") }
            { this.renderCell("putter.us") }
            { this.renderCell("putter.vus") }
          </tr>
          <tr>
            <th>Midrange</th>
            { this.renderCell("midrange.vos") }
            { this.renderCell("midrange.os") }
            { this.renderCell("midrange.stable") }
            { this.renderCell("midrange.us") }
            { this.renderCell("midrange.vus") }
          </tr>
          <tr>
            <th>Fairway</th>
            { this.renderCell("fairway.vos") }
            { this.renderCell("fairway.os") }
            { this.renderCell("fairway.stable") }
            { this.renderCell("fairway.us") }
            { this.renderCell("fairway.vus") }
          </tr>
          <tr>
            <th>Control</th>
            { this.renderCell("control.vos") }
            { this.renderCell("control.os") }
            { this.renderCell("control.stable") }
            { this.renderCell("control.us") }
            { this.renderCell("control.vus") }
          </tr>
          <tr>
            <th>Distance</th>
            { this.renderCell("distance.vos") }
            { this.renderCell("distance.os") }
            { this.renderCell("distance.stable") }
            { this.renderCell("distance.us") }
            { this.renderCell("distance.vus") }
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Grid;
