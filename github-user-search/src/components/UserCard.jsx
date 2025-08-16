function UserCard({ user }) {
  return (
    <div className="border p-4 rounded shadow w-80">
      <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-2">{user.login}</h2>
      <p className="text-center">{user.location || "No location available"}</p>
      <p className="text-center">Repos: {user.public_repos}</p>
    </div>
  );
}

export default UserCard;