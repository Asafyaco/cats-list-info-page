import React from "react";
import ReactDOM from "react-dom";
import Cat from "../Cat/Cat";
import "./Main.css";

export default class Maim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [
        {
          name: "Purrsloud",
          species: "Cat",
          favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
          birthYear: 2016,
          photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
        },
        {
          name: "Barksalot",
          species: "Dog",
          birthYear: 2008,
          photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
        },
        {
          name: "Meowsalot",
          species: "Cat",
          favFoods: ["tuna", "catnip", "celery"],
          birthYear: 2012,
          photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="cats">
          {this.state.cats.map((e) => {
            return (
              <Cat
                key={e.name}
                favFoods={e.favFoods}
                name={e.name}
                species={e.species}
                birthYear={e.birthYear}
                photo={e.photo}
              />
            );
          })}
        </div>
      </>
    );
  }
}
