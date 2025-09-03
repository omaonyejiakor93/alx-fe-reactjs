import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <nav className="space-x-4">
        <Link to="details" className="text-blue-500 hover:underline">
          ProfileDetails
        </Link>
        <Link to="settings" className="text-blue-500 hover:underline">
          ProfileSettings
        </Link>
      </nav>

      {/* Nested routes will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;