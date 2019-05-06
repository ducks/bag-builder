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
            { this.renderCell(this.props.selectedDiscs.putters.vos) }
            { this.renderCell(this.props.selectedDiscs.putters.os) }
            { this.renderCell(this.props.selectedDiscs.putters.stable) }
            { this.renderCell(this.props.selectedDiscs.putters.us) }
            { this.renderCell(this.props.selectedDiscs.putters.vus) }
          </tr>
          <tr>
            <th>Midrange</th>
            { this.renderCell(this.props.selectedDiscs.midranges.vos) }
            { this.renderCell(this.props.selectedDiscs.midranges.os) }
            { this.renderCell(this.props.selectedDiscs.midranges.stable) }
            { this.renderCell(this.props.selectedDiscs.midranges.us) }
            { this.renderCell(this.props.selectedDiscs.midranges.vus) }
          </tr>
          <tr>
            <th>Fairway</th>
            { this.renderCell(this.props.selectedDiscs.fairway.vos) }
            { this.renderCell(this.props.selectedDiscs.fairway.os) }
            { this.renderCell(this.props.selectedDiscs.fairway.stable) }
            { this.renderCell(this.props.selectedDiscs.fairway.us) }
            { this.renderCell(this.props.selectedDiscs.fairway.vus) }
          </tr>
          <tr>
            <th>Control</th>
            { this.renderCell(this.props.selectedDiscs.control.vos) }
            { this.renderCell(this.props.selectedDiscs.control.os) }
            { this.renderCell(this.props.selectedDiscs.control.stable) }
            { this.renderCell(this.props.selectedDiscs.control.us) }
            { this.renderCell(this.props.selectedDiscs.control.vus) }
          </tr>
          <tr>
            <th>Distance</th>
            { this.renderCell(this.props.selectedDiscs.distance.vos) }
            { this.renderCell(this.props.selectedDiscs.distance.os) }
            { this.renderCell(this.props.selectedDiscs.distance.stable) }
            { this.renderCell(this.props.selectedDiscs.distance.us) }
            { this.renderCell(this.props.selectedDiscs.distance.vus) }
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
