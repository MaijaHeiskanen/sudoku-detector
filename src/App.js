import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";

import SudokuTable from "./components/SudokuTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">Sudoku Detector</header>
      <SudokuTable />
    </div>
  );
}

export default App;
