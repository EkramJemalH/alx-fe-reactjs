import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <RecipeCard recipe={recipe} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
