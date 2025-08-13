// src/App.jsx
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;