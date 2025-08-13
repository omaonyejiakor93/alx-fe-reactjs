import React from 'react';
import { useRecipeStore } from './recipeStore';

function FavoritesList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  // Match favorite IDs with actual recipe objects
  const favoriteRecipes = recipes.filter(recipe =>
    favorites.includes(recipe.id)
  );

  if (!favoriteRecipes.length) {
    return <p>No favorite recipes yet.</p>;
  }

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;