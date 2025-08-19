// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

// Example fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
