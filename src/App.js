import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";

import SudokuTable from "./components/SudokuTable";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <header className="App-header">Sudoku Detector</header>
      <Buttons />
      <SudokuTable />
    </div>
  );
}

export default App;
