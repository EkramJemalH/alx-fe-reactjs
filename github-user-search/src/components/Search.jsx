import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = `${username ? `${username} in:login` : ""}${
      location ? ` location:${location}` : ""
    }${minRepos ? ` repos:>${minRepos}` : ""}`;

    setLoading(true);
    setError("");
    try {
      const results = await fetchUserData(query.trim());
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      }
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Results:</h2>
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 border rounded flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium"
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
