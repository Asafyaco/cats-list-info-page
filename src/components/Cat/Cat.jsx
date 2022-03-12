import React from "react";
import ReactDOM from "react-dom";
import "./Cat.css";
import Food from "../Food/Food";

export default class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="cat">
          <img onClick={() => {}} src={this.props.photo} />
          <h1> {this.props.name} </h1>
          <p>{this.props.species}</p>
          <p>{this.props.birthYear}</p>
          <Food key={this.props.favFoods} x={this.props.favFoods} /> ;
        </div>
      </>
    );
  }
}
