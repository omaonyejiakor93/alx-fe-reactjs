import React from 'react';
import useRecipeStore from '../store/RecipeStore';

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((r, i) => (
        <li key={i}>{r.title}</li>
      ))}
    </ul>
  );
}