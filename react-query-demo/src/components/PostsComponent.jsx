import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isFetching,       // true during background refetch
    refetch,
    dataUpdatedAt,    // timestamp of last successful fetch
  } = useQuery(['posts'], fetchPosts)

  if (isLoading) {
    return <p>Loading posts…</p>
  }

  if (error) {
    return (
      <div>
        <p style={{ color: 'red' }}>Failed to load posts: {(error).message}</p>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    )
  }

  const lastUpdated = new Date(dataUpdatedAt).toLocaleTimeString()

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        {isFetching && <small>(refreshing…)</small>}
      </div>

      <small>Last updated: {lastUpdated}</small>
      <div style={{ margin: '0.5rem 0 1rem' }}>
        <button onClick={() => refetch()}>Refetch Now</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem' }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: '0.75rem' }}>
            <strong>{post.title}</strong>
            <p style={{ margin: '0.5rem 0 0' }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

