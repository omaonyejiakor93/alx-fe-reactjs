import React, { useState } from "react";
import { fetchMyUser } from "../services/githubservices.js";

const Search = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLoadProfile = async () => {
    setLoading(true);
    setUserData(null);
    setError("");

    const data = await fetchMyUser();
    if (data) {
      setUserData(data);
    } else {
      setError("User not found");
    }
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleLoadProfile}>Load My GitHub Profile</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>{userData.name}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;