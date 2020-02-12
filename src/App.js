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
      table: [...array],
      hardTable: [...array],
      number: 0,
      isOwn: false
    };

    this.onClear = this.onClear.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
  }

  onChangeNumber(number) {
    console.log("Changing number to", number);
    this.setState({ number: number });
  }

  onCheck() {
    console.log("Checking the table...");
    this.setState({ number: 0 });
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
    this.setState({ hardTable: [...array], table: [...array], number: 0 });
  }

  onValueChange(index, number) {
    console.log("Changing the value of index", index, "to number", number);

    let newTable = [...this.state.table];
    newTable[index] = number;
    this.setState({ table: newTable });

    if (!this.state.isOwn) {
      let newTable = [...this.state.hardTable];
      newTable[index] = number;
      this.setState({ hardTable: newTable });
      //console.log("hardTable:", newTable);
    }
  }

  onChangeType(isOwn) {
    console.log("Changing isOwn to", isOwn);
    this.setState({ isOwn: isOwn });
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
        <Buttons
          onChangeNumber={this.onChangeNumber}
          onChangeType={this.onChangeType}
          onClear={this.onClear}
          onCheck={this.onCheck}
          number={this.state.number}
          isOwn={this.state.isOwn}
        />
        <SudokuTable
          table={this.state.table}
          hardTable={this.state.hardTable}
          onValueChange={this.onValueChange}
          number={this.state.number}
        />
      </div>
    );
  }
}

console.log(this);
