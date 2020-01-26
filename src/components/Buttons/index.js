import React, { Component } from "react";
import "./../../styles/Buttons.css";

export default class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      isOwn: false,
      activeColor: "lightblue",
      notActiveColor: "gray"
    };
  }

  changeType(isOwn) {
    console.log("Changing isOwn to", isOwn);
    this.setState({ isOwn: isOwn });
  }

  changeNumber(number) {
    console.log("Changing number to", number);
    this.setState({ number: number });
  }

  onClear() {
    this.setState({ number: 0 });
    this.props.onClear();
  }

  onCheck() {
    this.setState({ number: 0 });
    this.props.onCheck();
  }

  render() {
    let numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(i);
    }

    let numberButtons = numbers.map(number => {
      if (number % 3 === 1) {
        return (
          <div>
            <button
              className="button"
              style={
                number === this.state.number
                  ? { backgroundColor: this.state.activeColor }
                  : { backgroundColor: this.state.notActiveColor }
              }
              onClick={() => this.changeNumber(number)}
            >
              {number}
            </button>
            <button
              className="button"
              style={
                number + 1 === this.state.number
                  ? { backgroundColor: this.state.activeColor }
                  : { backgroundColor: this.state.notActiveColor }
              }
              onClick={() => this.changeNumber(number + 1)}
            >
              {number + 1}
            </button>
            <button
              className="button"
              style={
                number + 2 === this.state.number
                  ? { backgroundColor: this.state.activeColor }
                  : { backgroundColor: this.state.notActiveColor }
              }
              onClick={() => this.changeNumber(number + 2)}
            >
              {number + 2}
            </button>
          </div>
        );
      } else {
        return;
      }
    });

    return (
      <div className="Buttons">
        <div>
          <button className="typeButton" onClick={() => this.changeType(false)}>
            Hard number
          </button>
          <button className="typeButton" onClick={() => this.changeType(true)}>
            My number
          </button>
        </div>
        <div>
          {numberButtons}
          <button className="clearButton" onClick={() => this.onClear()}>
            clear
          </button>
          <button className="checkButton" onClick={() => this.onCheck()}>
            check
          </button>
        </div>
      </div>
    );
  }
}
