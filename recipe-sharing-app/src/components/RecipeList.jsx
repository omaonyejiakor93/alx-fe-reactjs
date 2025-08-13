// src/components/RecipeList.jsx
import useRecipeStore from '../store/RecipeStore';

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe.title}</li>
      ))}
    </ul>
  );
}

export default RecipeList;