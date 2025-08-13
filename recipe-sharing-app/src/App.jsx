// src/App.jsx
import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import { useRecipeStore } from "./components/recipeStore";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Sharing App</h1>

      {/* Search */}
      <SearchBar />

      {/* Add Recipe */}
      <AddRecipeForm />

      {/* Recipe List */}
      <h2>All Recipes</h2>
      <RecipeList recipes={recipes} />

      {/* Favorites */}
      <FavoritesList />

      {/* Recommendations */}
      <RecommendationsList />
    </div>
  );
}

export default App;