import React, { useState } from "react";
import Search from "./components/Search";   // ✅ Capital S
import UserCard from "./components/UserCard";
import { fetchGithubUser } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query, location, minRepos) => {
    try {
      const data = await fetchGithubUser(query, location, minRepos);
      setUsers(data.items || []);
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} users={users} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;