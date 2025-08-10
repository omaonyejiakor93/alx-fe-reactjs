import React from 'react';
import './App.css';
import UserContext from './UserContext';
import UserDetails from './components/UserDetails';

function App() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <UserDetails />
      </div>
    </UserContext.Provider>
  );
}

export default App;