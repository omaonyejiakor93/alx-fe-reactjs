import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [results, setResults] = useState([]);

  // ✅ async + await
  const handleSearch = async (e) => {
    e.preventDefault();
    if (username) {
      const data = await onSearch(username);
      setResults([data]); // put in array so we can use .map
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border rounded px-3 py-2 flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* ✅ && + map */}
      {results && results.map((user, index) => (
        <div key={index} className="p-4 border rounded shadow mb-2">
          <p>{user?.login}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;