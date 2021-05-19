import React, { Component } from "react";
import "./App.css";
import Square from "./components/Square";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      currentSquareIndex: 0,
      rainbowTreasure: Math.floor(Math.random() * 9),
      bomb: Math.floor(Math.random() * 9),
      isWon: false,
    };
  }
  squareClick = (index) => {
    this.setState({
      currentSquareIndex: index,
    });
    if (index === this.state.bomb) {
      this.setState({
        isWon: false,
      });
    } else if (index === this.state.rainbowTreasure) {
      this.setState({
        isWon: true,
      });
    }
  };
  render() {
    return (
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="board">
          {this.state.board.map((square, index) => {
            return (
              <Square
                key={index}
                square={square}
                squareClick={this.squareClick}
                index={index}
              />
            );
          })}
        </div>
        <p>{this.state.currentSquareIndex}</p>
        <p>BOMB: {this.state.bomb}</p>
        <p>Treasure: {this.state.rainbowTreasure}</p>
        {this.state.isWon ? <p>yayayyayayay you won</p> : <p>You lost!!</p>}
      </>
    );
  }
}
export default App;
