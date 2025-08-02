import axios from "axios";

export const fetchUserData = async (query) => {
  const endpoint = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}`;
  try {
    const response = await axios.get(endpoint);
    return response.data.items;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
