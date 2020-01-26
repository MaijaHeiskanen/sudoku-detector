import React, { Component } from "react";
import "./../../styles/Buttons.css";

export default class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        <div>
          <button>Hard number</button>
          <button>My number</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <br />
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <br />
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <br />
          <button>clear</button>
          <button>check</button>
        </div>
      </div>
    );
  }
}
