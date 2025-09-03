import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav className="flex gap-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes will render here */}
      <Outlet />
    </div>
  );
}

export default Profile;