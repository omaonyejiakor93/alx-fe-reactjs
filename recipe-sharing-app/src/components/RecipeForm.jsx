// src/components/RecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from '../store/RecipeStore';

function RecipeForm() {
  const [title, setTitle] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addRecipe({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;