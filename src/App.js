import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.css";

import SudokuTable from "./components/SudokuTable";
import Buttons from "./components/Buttons";

import solveSudoku from "@mattflow/sudoku-solver";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      number: 0,
      isOwn: false
    };
  }

  render() {
    const s = solveSudoku(
      "123456789456789120000000000000000000000000000000000000000000000000000000000000000"
    );

    return (
      <div className="App">
        <header className="App-header">Sudoku Detector</header>
        <code>
          <pre>{JSON.stringify(s, null, 2)}</pre>
        </code>
        <Buttons />
        <SudokuTable />
      </div>
    );
  }
}

console.log(this);
