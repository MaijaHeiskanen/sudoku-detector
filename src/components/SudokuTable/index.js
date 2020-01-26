import React, { Component } from "react";
import "./../../styles/Table.css";

export default class SudokuTable extends Component {
  render() {
    let cells = this.props.table.map(cell => {
      return <span>{cell}</span>;
    });

    return <div>{cells}</div>;
  }
}
