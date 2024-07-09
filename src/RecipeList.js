import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes = [], deleteRecipe }) {
  const rows = recipes.map((recipe, index) => (
    <RecipeView key={index} recipe={recipe} deleteRecipe={() => deleteRecipe(index)}/>
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
