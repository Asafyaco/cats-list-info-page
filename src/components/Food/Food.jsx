import React from "react";
import "./Food.css";

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="food">
          <p>{this.props.x}</p>
        </div>
      </>
    );
  }
}
