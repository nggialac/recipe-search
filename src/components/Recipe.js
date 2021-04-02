import React from "react";
import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: {},
  };

  componentDidMount = async () => {
    //const title = this.props.location.state.recipe;
    const rId = this.props.location.state.rId;
    const req = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${rId}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipe });
    console.log(this.state.activeRecipe);
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        <div className="active-recipe">
          <img
            className="active-recipe__img"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <h3 className="active-recipe__title">{recipe.title}</h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span>{recipe.publisher}</span>
          </h4>
          <p className="active-recipe__website">
            Website:
            <span>
              <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Recipe;
