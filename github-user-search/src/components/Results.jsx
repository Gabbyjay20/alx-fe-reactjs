export default function Results({ users }) {
  if (!users.length) return <p>No users found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-center font-bold mt-2">{user.login}</h2>
          <p className="text-center">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}