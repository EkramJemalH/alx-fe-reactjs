import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // <-- error state here

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = `${username ? `${username} in:login` : ""}${
      location ? ` location:${location}` : ""
    }${minRepos ? ` repos:>${minRepos}` : ""}`;

    setLoading(true);
    setError(""); // reset error before fetch
    try {
      const results = await fetchUserData(query.trim());
      if (results.length === 0) {
        setError("Looks like we can't find the user"); // <-- set error here
      }
      setUsers(results);
    } catch (err) {
      setError("Looks like we can't find the user"); // <-- set error here on catch
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>{/* your inputs here */}</form>

      {loading && <p>Loading...</p>}

      {error && !loading && (
        <p className="text-red-600 font-semibold">{error}</p> // <-- render error message here
      )}

      {/* display users if any */}
      {users.length > 0 && !loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
