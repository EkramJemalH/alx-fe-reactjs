import React, { useState } from "react";

export default function RegistrationForm() {
  // Step 1: State for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Form submitted:", { username, email, password });

    // Reset fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      {/* Username */}
      <div className="mb-3">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          value={username}       // ✅ controlled input
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter your username"
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}          // ✅ controlled input
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter your email"
        />
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}       // ✅ controlled input
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}
