import React, { Component } from "react";

import "./styles/App.css";

import SudokuTable from "./components/SudokuTable";
import Buttons from "./components/Buttons";

import solveSudoku from "@mattflow/sudoku-solver";

export default class App extends Component {
  constructor(props) {
    super(props);
    let array = [];
    for (let i = 0; i < 81; i++) {
      array.push("0");
    }

    this.state = {
      table: [...array]
    };

    this.onClear = this.onClear.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck() {
    console.log("Checking the table...");
    //TODO: get string of the hard number values
    //TODO: solve the sudoku
    //TODO: compare given numbers to the solution and mark wrong numbers
    //TODO: update wrongs to state.table (and re-render)
  }

  onClear() {
    console.log("Clearing the table...");
    let array = [];
    for (let i = 0; i < 81; i++) {
      array.push("0");
    }
    this.setState({ table: [...array] });
  }

  render() {
    const s = solveSudoku(
      "123456789456789120000000000000000000000000000000000000000000000000000000000000000"
    );
    //console.log(s);

    return (
      <div className="App">
        <header className="App-header">Sudoku Detector</header>
        <p>{s}</p>
        <code>
          <pre>{JSON.stringify(s, null, 2)}</pre>
        </code>
        <Buttons onClear={this.onClear} onCheck={this.onCheck} />
        <SudokuTable table={this.state.table} />
      </div>
    );
  }
}

console.log(this);
