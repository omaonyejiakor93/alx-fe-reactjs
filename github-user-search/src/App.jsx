import { useState } from "react";
import Search from "./components/search";   // ✅ correct import
import UserCard from "./components/UserCard";
import { fetchGithubUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await fetchGithubUser(username);
    setUser(data);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />   {/* ✅ usage now matches */}
      {user ? <UserCard user={user} /> : <p>No user data yet.</p>}
    </div>
  );
}

export default App;