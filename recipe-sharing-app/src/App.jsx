// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/recipes">Recipes</Link>
      </nav>

      <SearchBar /> {/* 🔹 For filtering */}

      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <div>
              <h1>My Recipe App</h1>
              <AddRecipeForm />
              <RecipeList />
            </div>
          }
        />

        {/* Recipes list route */}
        <Route path="/recipes" element={<RecipeList />} />

        {/* Recipe details route */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;