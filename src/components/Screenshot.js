import React from "react";
import html2canvas from "html2canvas";

class Screenshot extends React.Component {
  render() {
    return (
      <button 
        className="screenshotter"
        onClick={ this.props.onClick }
        type="button">
        Take screenshot!
      </button>
    )
  }
}

export default Screenshot;
