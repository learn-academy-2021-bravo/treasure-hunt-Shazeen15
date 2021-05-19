import React, { Component } from "react";

class Square extends Component {
  handleClick = () => {
    this.props.squareClick(this.props.index);
  };
  render() {
    return (
      <>
        <div className="square" onClick={this.handleClick}>
          <p>{this.props.square}</p>
        </div>
      </>
    );
  }
}
export default Square;
