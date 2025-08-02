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
        setError("Looks like we can't find the user");
      }
      setUsers(results);
    } catch (err) {
      setError("Looks like we can't find the user");
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
          onChange={(e) => setUsername(e.target.value)} // <--- target.value here
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)} // <--- target.value here
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)} // <--- target.value here
          className="p-2 border rounded"
        />
        <button
          type="submit" // <--- button element here
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
