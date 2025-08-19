import React, { useState } from 'react'
import PostsComponent from './components/PostsComponent'

export default function App() {
  const [showPosts, setShowPosts] = useState(true)

  return (
    <div style={{ padding: '1rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>React Query Demo</h1>

      <p>
        Use the toggle to unmount/remount <code>PostsComponent</code> and see cached data load instantly
        (no network) if within the <code>staleTime</code>.
      </p>

      <button onClick={() => setShowPosts((s) => !s)}>
        {showPosts ? 'Hide' : 'Show'} Posts
      </button>

      <hr style={{ margin: '1rem 0' }} />

      {showPosts ? <PostsComponent /> : <em>PostsComponent is unmounted</em>}
    </div>
  )
}
