import React from 'react';
import Search from './components/search.jsx';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;