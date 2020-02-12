import React, { Component } from "react";
import "./../../styles/Table.css";
import "./../../styles/App.css";

export default class SudokuTable extends Component {
  onValueChange(index, number) {
    this.props.onValueChange(index, number);
  }

  render() {
    let cells = [];
    for (let i = 0; i < this.props.table.length; i++) {
      if (this.props.hardTable[i] === this.props.table[i]) {
        console.log("this.props.hardTable[i] !== 0 was true");
        cells.push(
          <button
            key={i}
            id={i}
            className="hardNumber"
            onClick={e => {
              this.onValueChange(i, this.props.number);
            }}
          >
            {this.props.table[i]}
          </button>
        );
        if ((i + 1) % 9 === 0) {
          cells.push(<br />);
        }
      } else {
        console.log("this.props.hardTable[i] !== 0 was false");
        cells.push(
          <button
            key={i}
            id={i}
            className="ownNumber"
            onClick={e => this.onValueChange(i, this.props.number)}
          >
            {this.props.table[i]}
          </button>
        );
        if ((i + 1) % 9 === 0) {
          cells.push(<br />);
        }
      }
    }
    return (
      <div className="sudokuTable">
        <header className="Table-header">Sudoku:</header>
        {cells}
      </div>
    );
  }
}
