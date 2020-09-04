import React, { Component } from 'react';
import Recipe from "./Recipe"

class RecipesList extends Component {
    renderRecipes = () => this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)
    
    render() {
        return (
            <div id='recipe-list'>
                <p>Recipes</p>
                {this.renderRecipes()}
            </div>
        );
    }
}

export default RecipesList;
