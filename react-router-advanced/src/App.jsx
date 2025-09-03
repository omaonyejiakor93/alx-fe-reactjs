import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Simulated login state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => setIsAuthenticated(!isAuthenticated);

  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/1">Post 1</Link>
        <button onClick={toggleAuth} className="ml-4 border px-2 py-1">
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;