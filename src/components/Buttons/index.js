import React, { Component } from "react";
import "./../../styles/Buttons.css";

export default class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.props.onChangeNumber(number);
  }

  onClear() {
    this.setState({ isOwn: false });
    this.props.onClear();
  }

  onCheck() {
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
                number === this.props.number
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
                number + 1 === this.props.number
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
                number + 2 === this.props.number
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
          <button
            style={
              !this.state.isOwn
                ? { backgroundColor: this.state.activeColor }
                : { backgroundColor: this.state.notActiveColor }
            }
            className="typeButton"
            onClick={() => this.changeType(false)}
          >
            Hard number
          </button>
          <button
            style={
              this.state.isOwn
                ? { backgroundColor: this.state.activeColor }
                : { backgroundColor: this.state.notActiveColor }
            }
            className="typeButton"
            onClick={() => this.changeType(true)}
          >
            My number
          </button>
        </div>
        <div>
          {numberButtons}
          <button className="clearButton" onClick={() => this.onClear()}>
            Clear all
          </button>
          <button
            className="button"
            style={
              0 === this.props.number
                ? { backgroundColor: this.state.activeColor }
                : { backgroundColor: this.state.notActiveColor }
            }
            onClick={() => this.changeNumber(0)}
          >
            0
          </button>
          <button className="checkButton" onClick={() => this.onCheck()}>
            Check
          </button>
        </div>
      </div>
    );
  }
}
