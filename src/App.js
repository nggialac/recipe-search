import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from './components/Recipes';

const API_KEY = "";
//https://forkify-api.herokuapp.com/api/search?q=pizza

class App extends Component {
  //ES6 bỏ construct
  state = {
    recipes: [],
  };

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value; // Lấy name trong Form.js
    e.preventDefault(); //Huỷ bỏ event nếu nó có thể huỷ mà không dừng sự lan rộng(propagation) của event tới phần khác
    const api_call = await fetch(
      `https://forkify-api.herokuapp.com/api/search?${API_KEY}q=${recipeName}`
    );
    //console.log(recipeName);
    const data = await api_call.json();
    //console.log(data.recipes[0].recipe_id);
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {/* {this.state.recipes.map((recipe) => {
          return (
            <div key={recipe.recipe_id}>
              <img src={recipe.image_url} alt={recipe.title} />
              <p> {recipe.title} </p>
            </div>
          );
        })} */}
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
