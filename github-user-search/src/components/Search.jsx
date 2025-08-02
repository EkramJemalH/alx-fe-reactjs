import React, { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = `${username ? `${username} in:login` : ""}${
      location ? ` location:${location}` : ""
    }${minRepos ? ` repos:>${minRepos}` : ""}`;

    if (!query) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();
      setUsers(data.items || []);
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          type="submit"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="border p-2 rounded">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
