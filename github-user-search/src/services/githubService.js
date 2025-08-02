import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}`;

  try {
    const response = await axios.get(endpoint);
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
