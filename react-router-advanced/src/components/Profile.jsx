import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      {/* Navigation links for nested routes */}
      <nav className="space-x-4">
        <Link to="details" className="text-blue-500 hover:underline">
          ProfileDetails
        </Link>
        <Link to="settings" className="text-blue-500 hover:underline">
          ProfileSettings
        </Link>
      </nav>

      {/* Nested Routes defined here */}
      <div className="mt-6">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;