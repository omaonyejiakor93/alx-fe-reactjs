import { create } from 'zustand';

// Create a Zustand store for recipes
const useRecipeStore = create((set) => ({
  recipes: [],

  // Function to update the recipes array
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export default useRecipeStore;